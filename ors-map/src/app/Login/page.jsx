// src/app/Login/page.jsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '@/components/GoogleLoginButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError('Invalid credentials');
    } else {
      try {
        const roleRes = await fetch('/api/users/role');
        const result = await roleRes.json();
        if (!roleRes.ok) throw new Error(result.error);

        const { role } = result;
        router.push(role === 'admin' ? '/dashboard' : '/map');
      } catch (err) {
        console.error('Role fetch error:', err);
        setError('Login succeeded, but role check failed');
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign in
        </button>

        <div className="text-center text-gray-500 text-sm">or</div>

        <GoogleLoginButton />

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </main>
  );
}
