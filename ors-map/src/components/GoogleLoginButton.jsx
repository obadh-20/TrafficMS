//src/app/components/GoogleLoginButton.jsx
'use client';

import { signIn } from 'next-auth/react';

export default function GoogleLoginButton() {
  const handleGoogleSignIn = (e) => {
    e.preventDefault(); // ✅ Prevent form submit bubbling
    signIn('google', { callbackUrl: '/map' });
  };

  return (
    <button
      type="button" // ✅ Force it NOT to submit the form
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Sign in with Google</span>
    </button>
  );
}


