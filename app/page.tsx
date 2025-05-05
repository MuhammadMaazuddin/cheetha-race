"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import Navbar from './components/navbar';

function page() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div>page</div>

      <button onClick={() => router.push('/app')}>Go to IOT</button>
      </div>
  )
}

export default page