{
  interface Option<T> {
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Option<U>): Option<U>;
    getOrElse(value: T): T;
  }
  function _Option<T>(value: null | undefined): None;
  function _Option<T>(value: T): Some<T>;
  function _Option<T>(value: T): Option<T> {
    if (value == null) {
      return new None();
    }
    return new Some(value);
  }
  class Some<T> implements Option<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Some<U>): Some<U>;
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
      return f(this.value);
    }
    getOrElse(): T {
      return this.value;
    }
  }
  class None implements Option<never> {
    flatMap(): None {
      return this;
    }
    getOrElse<U>(value: U): U {
      return value;
    }
  }

  const res = _Option(6)
    .flatMap((n) => _Option(n * 3))
    .flatMap((n) => new None())
    .getOrElse(7); // 7
}
