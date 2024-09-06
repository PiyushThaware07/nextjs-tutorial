"use client"
import { useState } from "react";

export default function page() {
  const [count, setCount] = useState(20);
  return (
    <div className="p-10">
      <button onClick={() => setCount(count + 10)} className="bg-indigo-600 rounded px-5 py-2 text-sm">Increment Count --{">"} {count}</button>
    </div>
  );
}
