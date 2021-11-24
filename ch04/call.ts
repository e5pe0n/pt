{
  const call = <T extends unknown[], R>(f: (...args: T) => R, ...args: T) =>
    f(...args);

  const fill = (length: number, value: string) =>
    Array.from({ length }, () => value);

  const a = call(fill, 10, "a");
}
