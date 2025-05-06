"use client";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Assuming you have firebase auth initialized
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      alert("Signed up!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const auth = getAuth(auth);
    const provider = new GoogleAuthProvider();

    try {
      // Sign in with a popup for Google authentication
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Signed in with Google as ${user.displayName}`);
    } catch (err: any) {
      alert("Error with Google sign-in: " + err.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSignup}>Sign Up</button>

      <hr />

      {/* Google Sign-Up Button */}
      <button onClick={handleGoogleSignup}>
        Sign Up with Google
      </button>
    </div>
  );
}
