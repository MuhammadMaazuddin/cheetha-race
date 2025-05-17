"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggler";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="w-full fixed top-0 z-50 border-b backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-20">
        <a className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
          <span className="text-2xl font-bold text-foreground">Monkey Developer</span>
        </a>
        <div className="flex items-center space-x-6 text-lg">
        <Link href="/app">
            <Button asChild>
              <span>Get Started</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
