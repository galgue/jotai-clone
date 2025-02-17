export type PrimitiveAtom<T> = {
  value: T;
  set: (v: T | ((current: T) => T)) => void;
  subscribe: (callback: (v: T) => void) => () => void;
};

export type ComplexAtom<T> = {
  value: T;
  subscribe: (callback: (v: T) => void) => () => void;
};
