{
  const filter = <T>(array: T[], f: (item: T) => boolean) => {
    const res = [];
    for (let i = 0; i < array.length; ++i) {
      const item = array[i];
      if (f(item)) {
        res.push(item);
      }
    }
    return res;
  };
}
