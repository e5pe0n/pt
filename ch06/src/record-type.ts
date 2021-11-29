{
  type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  type Day = Weekday | "Sat" | "Sun";

  const nextDay: Record<Weekday, Day> = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat",
  };
}
