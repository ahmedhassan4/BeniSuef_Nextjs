"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 m-2 bg-amber-500 text-2xl"
      >
        Count: {count}
      </button>
    </div>
  );
}

export default Counter;
