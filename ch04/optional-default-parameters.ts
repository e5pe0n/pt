{
  const optionalLog = (
    message: string,
    userId?: string // optional param must be at the end
  ) => {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId || "Not signed in");
  };

  const defaultLog = (
    userId = "Not signed in", // default param do not have to be at the end
    message: string
  ) => {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
  };
}
