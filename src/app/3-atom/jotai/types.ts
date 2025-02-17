export type Atom<T> = {
  value: T;
  set: (v: T | ((current: T) => T)) => void;
  subscribe: (callback: (v: T) => void) => () => void;
};
