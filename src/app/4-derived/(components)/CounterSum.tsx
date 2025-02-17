"use client";

import { countersSumAtom } from "../atoms/counter";
import { useAtom } from "../jotai";

export const CounterSum = () => {
  const [sum] = useAtom(countersSumAtom);

  console.log("CounterSum");
  return (
    <div className="bg-green-700 p-2">
      CounterSum
      <div>sum: {sum}</div>
    </div>
  );
};
