{
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }
  const u: User = {
    name: "Ashley",
    age: 30,
  };
}
{
  type User = {
    name: string;
  };
  type User = {
    age: number;
  };
}
