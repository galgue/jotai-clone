import { ComplexAtom, PrimitiveAtom } from "./types";

type Atom<T> = PrimitiveAtom<T> | ComplexAtom<T>;
type GetFunc = <T>(atom: Atom<T>) => NoInfer<T>;
type Reader<T> = (get: GetFunc) => T;

const primitiveAtom = <T>(initialValue: T): PrimitiveAtom<T> => {
  let value = initialValue;
  let listeners = new Set<(v: T) => void>();
  return {
    get value() {
      return value;
    },
    set(newValue) {
      if (typeof newValue === "function") {
        value = (newValue as (current: T) => T)(value);
      } else {
        value = newValue;
      }
      listeners.forEach((listener) => listener(value));
    },
    subscribe(callback) {
      listeners.add(callback);
      return () => {
        listeners.delete(callback);
      };
    },
  };
};

const complexAtom = <T>(reader: Reader<T>): ComplexAtom<T> => {
  let value: T = reader((atom) => {
    atom.subscribe(() => {
      recalculateValue();
    });
    return atom.value;
  });

  let listeners = new Set<(v: T) => void>();

  const recalculateValue = () => {
    value = reader((atom) => atom.value);
    listeners.forEach((listener) => listener(value));
  };
  return {
    get value() {
      return value;
    },
    subscribe(callback) {
      listeners.add(callback);
      return () => {
        listeners.delete(callback);
      };
    },
  };
};

export function atom<T>(reader: Reader<T>): ComplexAtom<T>;
export function atom<T>(initialValue: T): PrimitiveAtom<T>;

export function atom<T>(initialValueOrReader: T | Reader<T>): Atom<T> {
  if (typeof initialValueOrReader === "function") {
    return complexAtom(initialValueOrReader as Reader<T>);
  } else {
    return primitiveAtom(initialValueOrReader);
  }
}
