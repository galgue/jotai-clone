import { Atom } from "./types";

export const atom = <T>(initialValue: T): Atom<T> => {
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
