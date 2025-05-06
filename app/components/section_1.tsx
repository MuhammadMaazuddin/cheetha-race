"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Section1() {

  const router = useRouter();
  const { user, loading } = useAuth();

  const handleGetStarted = () => {
    if (loading) return;
    if (user) {
      router.push("/app"); // or your desired page
    } else {
      router.push("/login");
    }
  };




  return (
    <section className="w-full  text-foreground py-30">
      <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-80">
        
        {/* Left: Intro Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Welcome to <span className="text-yellow-400">Cheetha</span> 
          </h1>
          <h1 className="text-2xl mb-2 leading-tight">Product Developer</h1>
          <p className="text-lg text-gray-300 mb-2">
            All-in-one developer toolkit combining the power of AI, Blockchain, and productivity tools — designed for speed, simplicity, and scalability.
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-yellow-400  hover:bg-yellow-600 text-yellow-950">
            Get Started
          </Button>

        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/cheetha-hero.jpg"
            alt="Cheetha Illustration"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
