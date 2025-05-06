"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      alert("Logged in!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
