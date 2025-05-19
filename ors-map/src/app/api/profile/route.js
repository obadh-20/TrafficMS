//src/app/api/profile/route.js
import { auth } from '@/auth';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export async function PUT(req) {
  const session = await auth();
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { name, email, image, password } = await req.json();

  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  const queries = [
    'UPDATE users SET name = ?, email = ?, image = ? WHERE email = ?',
    [name, email, image, session.user.email]
  ];

  await conn.execute(...queries);

  // Optional password update
  if (password && password.length >= 6) {
    const hashed = await bcrypt.hash(password, 10);
    await conn.execute(
      'UPDATE users SET password = ? WHERE email = ?',
      [hashed, session.user.email]
    );
  }

  await conn.end();

  return new Response(JSON.stringify({ success: true }));
}
