type User = {
  id: string;
  name: string;
};

// Function type definition: a function that takes a User and returns a User
type MakechangeFunc = (user: User) => User;

const modifyUser = (user: User[], id: string, makeChange: MakechangeFunc) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

const users: User[] = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Jane",
  },
];

// Correct usage: updates the user's name
modifyUser(users, "1", (user) => {
  return {
    ...user,
    name: "Faruq",
  };
});

// Intentional error: name should be a string, not a number
modifyUser(
  users,
  "1",
  // @ts-expect-error - name should be a string, not a number
  (user) => {
    return {
      ...user,
      name: 123,
    };
  }
);
