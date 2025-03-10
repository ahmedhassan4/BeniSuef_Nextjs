"use client";
import React from "react";

interface Props {
  error: Error;
}

export default function error({ error }: Props) {
  return (
    <>
      <div>something went wrong</div>
      <p>{error.message}</p>
    </>
  );
}
