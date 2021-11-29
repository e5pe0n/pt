{
  function tuple<T extends unknown[]>(...ts: T) {
    return ts;
  }

  const a = tuple(1, true); // a: [number, string]
}
