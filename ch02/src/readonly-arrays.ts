{
  const a: readonly number[] = [1, 2, 3];
  const b: readonly number[] = a.concat(4);
  // a[4] = 5; // Error TS2542
  // a.push(6) // Error TS2339
}
