"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Section1() {
 

 

  return (
    <section className="w-full text-foreground py-30">
      <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-80">
        {/* Left: Intro Text */}
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-purple-400">Monkey</span>
          </h1>
          <p className="mb-4">
            Product Developer
          </p>
          <p className="text-md italic text-purple-500 mb-4">
            Built for the fastest minds.
          </p>
          <p className="text-xl text-foreground font-light mb-6">
            All-in-one developer toolkit combining the power of AI, Blockchain, and productivity tools — designed for speed, simplicity, and scalability.
          </p>
          <Link href="/app">
            <Button asChild>
              <span>Get Started</span>
            </Button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/cheetha.png"
            alt="Cheetha Developer Illustration"
            width={500}
            height={500}
            className="rounded-xl transition-transform duration-500 hover:rotate-3 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
