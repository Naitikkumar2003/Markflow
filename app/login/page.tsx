"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ 
        username: username, 
        password: password 
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.accessToken);
      window.location.href = "/"; 
    } else {
      alert("Invalid login!"); 
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-8 bg-[#141414] border border-gray-800 rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        
        <input 
          className="w-full p-2 mb-4 bg-[#1a1a1a] border border-gray-800 rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input 
          type="password"
          className="w-full p-2 mb-4 bg-[#1a1a1a] border border-gray-800 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 p-2 rounded font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
}