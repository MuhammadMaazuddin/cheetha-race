"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Section1() {
 

 

  return (
    <section className="w-full text-foreground py-30">
      <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-80">
        {/* Left: Intro Text */}
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Welcome to <span className="text-yellow-400">Cheetha</span>
          </h1>
          <h2 className="text-3xl mb-2 leading-tight font-semibold">
            Product Developer
          </h2>
          <p className="text-md italic text-yellow-500 mb-4">
            Built for the fastest minds.
          </p>
          <p className="text-xl text-foreground font-light mb-6">
            All-in-one developer toolkit combining the power of AI, Blockchain, and productivity tools — designed for speed, simplicity, and scalability.
          </p>
          <Button
            className="bg-yellow-400 hover:bg-yellow-600 text-yellow-950 text-sm px-6 py-3 "
          >
            Get Started
          </Button>
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
