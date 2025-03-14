import { auth } from "@/services/auth";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Account", path: "/account" },
  { name: "About", path: "/about" },
];

export default async function Navigation() {
  const nav = [...navItems];
  const session = await auth();
  if (session?.user) nav.push({ name: "logout", path: "/logout" });
  if (!session?.user) nav.push({ name: "login", path: "/login" });
  console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {nav.map(({ name, path }) => (
          <li key={name}>
            <NavLink name={name} path={path} />
          </li>
        ))}
        {session?.user && (
          <li>
            <Image
              src={session?.user?.image}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
