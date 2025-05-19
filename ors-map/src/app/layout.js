import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Traffic Map',
  description: 'Traffic-aware routing and admin dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Navbar /> {/* 🧠 Auto-renders based on user role */}
          <main className="p-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
