{
  type ElementType<T> = T extends unknown[] ? T[number] : T;
  type A = ElementType<number[]>; // number
}
{
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type B = ElementType<number[]>; // number
}
{
  type ElementUgly<T, U> = T extends U[] ? U : T;
  type C = ElementUgly<number[]>; // Error TS2314
}
{
  type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;

  type F = typeof Array["prototype"]["slice"];
  type A = SecondArg<F>; // number | undefined
}
