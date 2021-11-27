{
  type Food = {
    calories: number;
    tasty: boolean;
  };
  type Sushi = Food & {
    salty: boolean;
  };
  type Cake = Food & {
    sweet: boolean;
  };
}
