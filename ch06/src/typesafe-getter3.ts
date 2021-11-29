{
  type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
      o: O,
      k1: K1,
      k2: K2
    ): O[K1][K2];
    <
      O extends object,
      K1 extends keyof O,
      K2 extends keyof O[K1],
      K3 extends keyof O[K1][K2]
    >(
      o: O,
      k1: K1,
      k2: K2,
      k3: K3
    ): O[K1][K2][K3];
  };

  type ActivityLog = {
    lastEvent: Date;
    events: {
      id: string;
      timestamp: Date;
      type: "Read" | "Write";
    }[];
  };

  const activityLog: ActivityLog = {
    lastEvent: new Date(),
    events: [
      {
        id: "id00",
        timestamp: new Date(2000, 0, 1),
        type: "Read",
      },
      {
        id: "id01",
        timestamp: new Date(2010, 6, 6),
        type: "Read",
      },
      {
        id: "id02",
        timestamp: new Date(2020, 11, 11),
        type: "Write",
      },
    ],
  };

  const get: Get = (object: any, ...keys: string[]) => {
    let res = object;
    keys.forEach((k) => (res = res[k]));
    return res;
  };

  console.log(get(activityLog, "events", 0, "type")); // Read
}
