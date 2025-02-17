"use client";

import { counterAtom } from "../atoms/counter";
import { useAtom } from "../jotai";

export const LeftSide = () => {
  const [count, setCount] = useAtom(counterAtom);

  console.log("LeftSide");

  return (
    <div className="bg-red-800">
      LeftSide
      <div>
        <div>count: {count}</div>
        <button onClick={() => setCount((current) => current - 1)}>-1</button>
      </div>
    </div>
  );
};
