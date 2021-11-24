{
  type Cat = { name: string; purrs: boolean };
  type Dog = { name: string; barks: boolean; wags: boolean };
  type CatOrDogOrBoth = Cat | Dog;
  type CatAndDog = Cat & Dog;

  // Cat
  const cat: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true,
  };

  const dog: Dog = {
    name: "Domino",
    barks: true,
    wags: true,
  };

  const both: CatOrDogOrBoth = {
    name: "Donkers",
    barks: true,
    purrs: true,
    wags: true,
  };

  const catAndDog: CatAndDog = {
    name: "Domino",
    barks: true,
    purrs: true,
    wags: true,
  };

  (a: string, b: number): string | number => a || b;
}
