import { atom, useAtom } from "jotai";

export const countAtom = atom(0);

export const countDerAtom = atom((get) => {
  const count = get(countAtom);
  return count;
});

const [state, setState] = useAtom(countDerAtom);