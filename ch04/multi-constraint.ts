type HasSides = {
  numberOfSides: number;
};
type SidesHaveLength = {
  sideLength: number;
};

const logPerimeter = <Shape extends HasSides & SidesHaveLength>(s: Shape) => {
  console.log(s.numberOfSides * s.sideLength);
  return s;
};
