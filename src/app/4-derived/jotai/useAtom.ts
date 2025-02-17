import { useEffect, useState } from "react";
import { ComplexAtom, PrimitiveAtom } from "./types";

type UsePrimitiveAtom<T> = [T, (v: T | ((current: T) => T)) => void];
type UseComplexAtom<T> = [T];
type UseAtom<T> = UsePrimitiveAtom<T> | UseComplexAtom<T>;

export function useAtom<T>(
  primitiveAtom: PrimitiveAtom<T>
): UsePrimitiveAtom<T>;
export function useAtom<T>(complexAtom: ComplexAtom<T>): UseComplexAtom<T>;

export function useAtom<T>(
  atom: PrimitiveAtom<T> | ComplexAtom<T>
): UseAtom<T> {
  const [value, setValue] = useState(atom.value);
  useEffect(() => {
    return atom.subscribe(setValue);
  }, [atom]);

  if ("set" in atom) {
    return [value, atom.set];
  }

  return [value] as UseAtom<T>;
}
