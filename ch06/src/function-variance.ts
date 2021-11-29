{
  class Animal {}
  class Bird extends Animal {
    chirp() {}
  }
  class Crow extends Bird {
    caw() {}
  }

  function chirp(bird: Bird): Bird {
    bird.chirp();
    return bird;
  }

  chirp(new Animal()); // Error TS2345; Animal is not assigneable to Bird
  chirp(new Bird());
  chirp(new Crow());

  // Asignable a function to f must satisfy below
  // - parameter type is :> Bird
  // - return type is :< Bird
  function clone(f: (b: Bird) => Bird): void {
    const parent = new Bird();
    const babyBird = f(parent);
    babyBird.chirp(); // at least babyBird should have chirp()
  }

  function birdToBird(b: Bird): Bird {
    return b;
  }
  clone(birdToBird); // OK

  function birdToCrow(b: Bird): Crow {
    return new Crow();
  }
  clone(birdToCrow); // OK

  function birdToAnimal(b: Bird): Animal {
    return new Animal();
  }
  clone(birdToAnimal); // Error TS2345; Aniaml is not assignable to Bird

  function animalToBird(a: Animal): Bird {
    return new Bird();
  }
  clone(animalToBird);

  function crowToBird(c: Crow): Bird {
    c.caw(); // Crow is an upper bound on types that have caw()
    return new Bird();
  }
  clone(crowToBird); // Error TS2345
}
