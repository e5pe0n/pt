{
  class MySet {
    has(value: number): boolean {
      // ...
    }
    add(value: number): this {
      // ...
    }
  }

  class MutableSet extends Set {
    delete(value: number): boolean {
      // ...
    }
  }

  const s = new MySet();
  s.add(1).add(2).add(3);
}
