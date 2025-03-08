"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Account", path: "/account" },
  { name: "About", path: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={
                pathname === path ? "text-yellow-500" : "hover:text-amber-400 "
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
