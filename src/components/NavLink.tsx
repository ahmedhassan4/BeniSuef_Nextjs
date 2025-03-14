"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  path: string;
}

export default function NavLink({ name, path }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={
        pathname === path ? "text-yellow-500" : "hover:text-amber-400 "
      }
    >
      {name}
    </Link>
  );
}
