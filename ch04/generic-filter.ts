{
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[];
  };

  const filter: Filter = (array, f) => {
    const res = [];
    for (let i = 0; i < array.length; ++i) {
      const item = array[i];
      if (f(item)) {
        res.push(item);
      }
    }
    return res;
  };

  console.log(filter([1, 2, 3], (x) => x > 2)); // [ 3 ]
  console.log(filter(["a", "b"], (x) => x !== "b")); // [ 'a' ]

  const names = [
    { firstName: "beth" },
    { firstName: "caitlyn" },
    { firstName: "xin" },
  ];
  console.log(filter(names, (x) => x.firstName.startsWith("b"))); // [ { firstName: 'beth' } ]
}
