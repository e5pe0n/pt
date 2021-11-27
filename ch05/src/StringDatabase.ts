{
  type State = {
    [key: string]: string;
  };

  class StringDatabase {
    constructor(public state: State = {}) {}
    get(key: string) {
      return key in this.state ? this.state[key] : null;
    }
    set(key: string, value: string): void {
      this.state[key] = value;
    }
    static from(state: State) {
      const db = new StringDatabase();
      for (const key in state) {
        db.set(key, state[key]);
      }
      return db;
    }
  }
}
