type ClassConstructor<T> = new (...args: any[]) => T;

function withEZDebug<C extends ClassConstructor<{ getDebugValue(): object }>>(
  Clazz: C
) {
  return class extends Clazz {
    debug() {
      const Name = Clazz.name;
      const value = this.getDebugValue();
      return `${Name}(${JSON.stringify(value)})`;
    }
  };
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: `${this.firstName} ${this.lastName}`,
    };
  }
}
const User = withEZDebug(HardToDebugUser);
const u = new User(3, "Emma", "Gluzman");
console.log(u.debug()); // HardToDebugUser({"id":3,"name":"Emma Gluzman"})

export {};
