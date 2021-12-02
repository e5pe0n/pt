{
  function ask() {
    return prompt("When is your birthday?");
  }

  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}

  function parse(
    birthday: string
  ): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const date = new Date(birthday);
    if (!isValid(date)) {
      return new InvalidDateFormatError("Enter a date in the from YYYY/MM/DD");
    }
    if (date.getTime() > Date.now()) {
      return new DateIsInTheFutureError("Are you a timelord?");
    }
    return date;
  }

  const res = parse(ask());
  if (res instanceof InvalidDateFormatError) {
    console.error(res);
  } else if (res instanceof DateIsInTheFutureError) {
    console.error(res);
  } else {
    console.info("Date is", res.toISOString());
  }
}
