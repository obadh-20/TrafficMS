'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function useRoleRedirect() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) return router.replace('/Login');

    const path = session.user.role === 'admin' ? '/dashboard' : '/map';
    router.replace(path);
  }, [status, session, router]);
}
