"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-amber-700">
        Cultura
      </Link>

      <div className="flex gap-6 text-lg">
        <Link href="/">Explore</Link>
        <Link href="/video/kathak">Dance Forms</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
