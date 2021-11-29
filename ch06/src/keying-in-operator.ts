{
  type APIResponse = {
    user: {
      userId: string;
      friendList: {
        count: number;
        friends: {
          firstName: string;
          lastName: string;
        }[];
      };
    };
  };

  type FriendList = APIResponse["user"]["friendList"];
  type Friend = FriendList["friends"][number];

  type ResponseKeys = keyof APIResponse; // "user"
  type UserKeys = keyof APIResponse["user"]; // "userId" | "friendList"
  type FriendListKeys = keyof APIResponse["user"]["friendList"]; // "count" | "friends"
}
