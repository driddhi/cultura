"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { title: "Dance Forms", href: "/dance" },
    { title: "About", href: "/about" },
    { title: "Festivals", href: "/festivals" },
    { title: "Profile", href: "/profile" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold">
        Cultura<span className="text-orange-600">.</span>
      </Link>

      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-orange-600 ${
              pathname === item.href ? "text-orange-500 font-semibold" : "text-gray-700"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
