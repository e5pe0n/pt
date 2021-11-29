{
  type Currency = {
    unit: "EUR" | "GBP" | "JPY" | "USD";
    value: number;
  };

  const Currency = {
    DEFAULT: "USD",
    form(value: number, unit = Currency.DEFAULT): Currency {
      return { unit, value };
    },
  };
}
