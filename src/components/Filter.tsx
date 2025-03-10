"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  console.log("searchParams " + searchParams);

  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    console.log("filter " + filter);
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
    console.log(filter);
  }

  return (
    <div className="flex gap-5 justify-center border-b border-primary-900 ">
      <button
        className="text-cyan-500 text-2xl"
        onClick={() => handleFilter("all")}
      >
        all
      </button>
      <button
        className="text-cyan-500 text-2xl"
        onClick={() => handleFilter("small")}
      >
        small
      </button>
      <button
        className="text-cyan-500 text-2xl"
        onClick={() => handleFilter("medium")}
      >
        medium
      </button>
      <button
        className="text-cyan-500 text-2xl"
        onClick={() => handleFilter("large")}
      >
        large
      </button>
    </div>
  );
}
