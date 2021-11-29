type Options = {
  baseURL: string;
  cacheSize?: number;
  tier?: "prod" | "dev";
};

class API {
  constructor(private optinos: Options) {}
}

// 1
new API({
  baseURL: "https://api.mysite.com",
  tier: "prod",
});

// 2
new API({
  baseURL: "https://api.mysite.com",
  badTier: "Prod", // Error TS2345
});

// 3
new API({
  baseURL: "https://api.mysite.com",
  badTier: "prod",
} as Options);

// 4
const badOptions = {
  baseURL: "https://api.mysite.com",
  badTier: "prod",
};
new API(badOptions);

// 5
const options: Options = {
  baseURL: "https://api.mysite.com",
  badTier: "prod", // Error TS2322
};
new API(options);
