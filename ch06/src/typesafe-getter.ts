{
  function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
    return o[k];
  }
}
