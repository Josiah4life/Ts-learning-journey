interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const mappingFunction = (users: { name: string }, index: number): User => ({
  ...users,
  id: index,

  // @ts-expect-error
  age: 30,
});

const usersWithIds: User[] = users.map(mappingFunction);

// const usersWithIds: User[] = users.map((user, index) => ({
//   ...user,
//   id: index,
//   // @ts-expect-error
//   age: 30,
// }));

// excess property checks only apply to object literals assigned directly to variables.

// const x: User = {
//   name: "Joyboy",
//   id: 1,
//   age: 30, // ❌ Error! Extra property
// };
