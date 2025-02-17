import { useEffect, useState } from "react";
import { Atom } from "./types";

type UseAtom<T> = [T, (v: T | ((current: T) => T)) => void];

export function useAtom<T>(atom: Atom<T>): UseAtom<T> {
  const [value, setValue] = useState(atom.value);
  useEffect(() => {
    return atom.subscribe(setValue);
  }, [atom]);

  return [value, atom.set];
}
