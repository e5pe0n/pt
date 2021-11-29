{
  type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
  };

  type OptionalAccount = {
    [K in keyof Account]?: Account[K];
  };
  type NullableAccount = {
    [K in keyof Account]: Account[K] | null;
  };
  type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K];
  };

  // make all fields writable again
  type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K];
  };
  // make all fields required again
  type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K];
  };
}
