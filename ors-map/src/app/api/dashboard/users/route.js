import { getDBConnection } from '@/lib/db';

export async function GET() {
  const conn = await getDBConnection();
  const [rows] = await conn.execute('SELECT id, name, email, role FROM users ORDER BY id ASC');
  await conn.end();

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(req) {
  try {
    const { id, name, email, role } = await req.json();
    const userId = parseInt(id);
    const trimmedName = String(name || '').trim();
    const trimmedEmail = String(email || '').trim();
    const trimmedRole = String(role || '').trim();

    if (!userId || !trimmedName || !trimmedEmail || !['user', 'admin'].includes(trimmedRole)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }

    const conn = await getDBConnection();
    await conn.execute(
      'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
      [trimmedName, trimmedEmail, trimmedRole, userId]
    );
    await conn.end();

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error('PUT users error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
