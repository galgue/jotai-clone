"use client";

import { counterAtom } from "../atoms/counter";
import { useAtom } from "../jotai";

export const RightSide = () => {
  console.log("RightSide");

  return (
    <div className="bg-orange-700 p-2">
      RightSide
      <div>
        <InnerCounter />
      </div>
    </div>
  );
};

const InnerCounter = () => {
  const [count, setCount] = useAtom(counterAtom);

  console.log("InnerCounter");

  return (
    <div className="bg-cyan-800">
      <div>InnerCounter</div>
      <div>
        <div>count: {count}</div>
        <button onClick={() => setCount((current) => current + 1)}>+1</button>
      </div>
    </div>
  );
};
