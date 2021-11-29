declare global {
  interface Array<T> {
    zip<U>(list: U[]): [T, U][];
  }
}

export {};
