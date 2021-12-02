{
  type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
  ) => void;

  class Promise<T, E extends Error> {
    constructor(f: Executor<T, E>) {}
    then<U, F extends Error>(g: (result: T) => Promise<U, F>): Promise<U, F>;
    catch<U, F extends Error>(g: (error: E) => Promise<U, F>): Promise<U, F>;
  }
}
