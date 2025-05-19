'use client';
import useRoleRedirect from '@/hooks/useRoleRedirect';

export default function Home() {
  useRoleRedirect();
  return <p className="p-4">Redirecting...</p>;
}
