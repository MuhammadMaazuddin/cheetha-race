"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u: any) => setUser(u));
    return () => unsub();
  }, []);

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
    </div>
  );
}
