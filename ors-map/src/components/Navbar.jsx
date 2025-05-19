'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (status === 'loading' || !session) return null;

  const isAdmin = session.user.role === 'admin';
  const links = isAdmin
    ? [
        { href: '/dashboard/roads', label: 'Roads' },
        { href: '/dashboard/predictions', label: 'Predictions' },
        { href: '/dashboard/users', label: 'Users' },
        { href: '/dashboard/map', label: 'Map View' },
        { href: '/dashboard/reports', label: 'Reports' },
      ]
    : [
        { href: '/map', label: 'Map' },
        { href: '/profile', label: 'Profile' },
      ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">🚦 Traffic Map</h1>

        {/* Desktop */}
        <nav className="hidden sm:flex gap-6 items-center">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-blue-600">
              {link.label}
            </Link>
          ))}
          <span className="text-sm text-gray-600">{session.user.name}</span>
          <img src={session.user.image || 'https://www.gravatar.com/avatar/?d=mp'} className="w-8 h-8 rounded-full border" />
          <button
            onClick={() => signOut({ callbackUrl: '/Login' })}
            className="bg-red-500 text-white px-3 py-1.5 rounded"
          >
            Sign Out
          </button>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="sm:hidden">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden px-4 py-2 space-y-2 bg-white">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm">
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: '/Login' })}
            className="w-full bg-red-500 text-white py-1.5 rounded text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
}
