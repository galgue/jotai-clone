"use client";

import { useAtom } from "jotai";
import { countAtom } from "../../atoms/count";

export const SubRight = () => {
  const [count, setCount] = useAtom(countAtom);

  console.log("SubRight");

  return (
    <div>
      <div>SubRight</div>
      <div>{count}</div>
      <button
        className="bg-blue-500 text-white w-16"
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
    </div>
  );
};
