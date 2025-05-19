// src/app/api/users/role/route.js
import { auth } from '@/auth'; // ✅ this imports the App Router-friendly session


export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      console.warn('❌ No session found for /api/users/role');
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const role = session.user.role || 'user';

    return new Response(JSON.stringify({ role }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('🔥 Error in /api/users/role:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
