type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};
