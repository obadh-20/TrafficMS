//src/app/dashboard/page.jsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardHome() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/roads');
  }, [router]);

  return <p className="p-4">Redirecting...</p>;
}
