{
  type UserTextEvent = {
    type: "TextEvent";
    value: string;
    target: HTMLInputElement;
  };
  type UserMouseEvent = {
    type: "MouseEvent";
    value: [number, number];
    target: HTMLElement;
  };

  type UserEvent = UserTextEvent | UserMouseEvent;

  function handle(event: UserEvent) {
    if (typeof event.value === "string") {
      event.value;
      event.target;
      return;
    }
    event.value;
    event.target;
  }
}
