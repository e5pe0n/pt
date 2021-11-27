{
  interface Food {
    calories: number;
    tasty: boolean;
  }
  interface Sushi extends Food {
    salty: boolean;
  }
  interface Cake extends Food {
    seet: boolean;
  }
}
