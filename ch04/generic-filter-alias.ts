{
  type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[];
  };

  const numberFilter: Filter<number> = (array, f) => [];
  const stringFilter: Filter<string> = (array, f) => [];
}
