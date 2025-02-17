"use client";

import { useAtom } from "jotai";
import { countAtom } from "../atoms/count";

export const Left = () => {
  const [count, setCount] = useAtom(countAtom);

  console.log("Left");

  return (
    <div>
      <div>Left</div>
      <div>{count}</div>
      <button
        className="bg-red-600 w-16 text-white"
        onClick={() => setCount((c) => c - 1)}
      >
        -1
      </button>
    </div>
  );
};
