"use client";

import React from 'react';
import Navbar from './components/navbar';
import { useRouter } from 'next/navigation';
import Section1 from './components/section_1';
import Section2 from './components/section_2';

function Page() {
  const router = useRouter();

  return (
    <div className="py-24 text-center">
      <Navbar />
      <Section1 />
      <Section2 />

    </div>
  );
}

export default Page;
