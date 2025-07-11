'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Link href="/about" className="text-blue-500 underline">
        Go to About Page
      </Link>
    </div>
  );
}