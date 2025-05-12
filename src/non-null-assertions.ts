import { expect, it } from "vitest";

const findUsersByName = (
  searchParams?: { name?: string },
  users?: {
    id: string;
    name: string;
  }[]
) => {
  if (searchParams?.name) {
    return users?.filter((user) => user.name.includes(searchParams.name!));
    //                                                                 ^ use `!` to assert name is defined, since the if check guarantees that
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "34",
        name: "Baba",
      },
    ]
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);
});
