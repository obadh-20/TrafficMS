//src/app/dashboard/layout.jsx
'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user.role !== 'admin') {
      router.replace('/map');
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return <p className="p-4">Checking permissions...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      <main className="p-6">{children}</main>
    </div>
  );
}
