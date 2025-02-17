import { atom } from "../jotai";

export const counterAtom = atom(0);
export const counterAtom2 = atom(0);

export const countersSumAtom = atom((get) => {
  const count = get(counterAtom);
  const count2 = get(counterAtom2);
  return count + count2;
});
