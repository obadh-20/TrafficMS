import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import bcrypt from 'bcryptjs';
import { getDBConnection } from './db';

export async function getUserSession() {
  return await getServerSession(authOptions);
}

export async function getUserFromDB(email, password) {
  try {
    const conn = await getDBConnection();
    const [rows] = await conn.execute('SELECT * FROM users WHERE email = ?', [email]);
    await conn.end();

    if (rows.length === 0) return null;
    const user = rows[0];

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || 'user',
      image: user.image || null,
    };
  } catch (error) {
    console.error('🔥 DB auth error:', error);
    return null;
  }
}
