// src/app/profile/page.jsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, update } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/login');
      return;
    }

    setFormData({
      name: session.user.name || '',
      email: session.user.email || '',
      image: session.user.image || '',
      password: '',
    });
  }, [status, session, router]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('file', file);

    const res = await fetch('/api/profile/upload', {
      method: 'POST',
      body: uploadData,
    });

    const data = await res.json();
    if (res.ok && data.url) {
      setFormData(prev => ({ ...prev, image: data.url }));
      toast.success('✅ Image uploaded');
    } else {
      toast.error('❌ Image upload failed');
    }
  };

  const handleSave = async () => {
    setLoading(true);

    const res = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success('✅ Profile updated');

      await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password || '',
      });

      await update(); // refresh UI
    } else {
      toast.error('❌ Failed to update profile');
    }

    setFormData(prev => ({ ...prev, password: '' }));
    setLoading(false);
  };

  if (status === 'loading' || !session) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow my-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">👤 My Profile</h1>

      <label className="block mb-3">
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={e => handleChange('name', e.target.value)}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-3">
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-3">
        New Password (optional):
        <input
          type="password"
          value={formData.password}
          onChange={e => handleChange('password', e.target.value)}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-3">
        Upload Profile Image:
        <div className="flex items-center gap-4 mt-2">
          <button
            type="button"
            onClick={() => document.getElementById('image-upload').click()}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Upload Image
          </button>

          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="Profile Preview"
              className="w-12 h-12 rounded-full border"
            />
          )}
        </div>
      </label>

      <button
        onClick={handleSave}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}
