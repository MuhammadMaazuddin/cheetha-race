"use client";

import React from 'react';
import Navbar from './components/navbar';
import Section_1 from './components/section_1';
import { useRouter } from 'next/navigation'; // using next/navigation instead of next/router

function Page() {
  const router = useRouter();

  return (
    <div className="py-24 text-center">
      <Navbar />
      <Section_1 />
      <h1 className="text-3xl font-bold mb-4">Welcome to the App!</h1>
      <p className="mb-4">Create an account or log in to continue</p>
      <button 
        onClick={() => router.push("/signup")} 
        className="mr-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
      <button 
        onClick={() => router.push("/login")} 
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
}

export default Page;
