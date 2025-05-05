"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ModeToggle } from "@/components/ui/mode-toggler";
import { Button } from "@/components/ui/button";

function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full fixed top-0 z-50 border-b backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-20">
        <div className="text-2xl font-bold">logo</div>
        <div className="flex items-center space-x-3 text-lg">
        <button onClick={() => router.push('/app')}>Get started</button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;