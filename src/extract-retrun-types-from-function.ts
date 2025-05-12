import type { Expect, Equal } from "@total-typescript/helpers";

const createUser = (id: string) => {
  return {
    id,
    name: "John Doe",
    email: "example@email.com",
  };
};

type User = ReturnType<typeof createUser>;

type test = Expect<
  Equal<
    User,
    {
      id: string;
      name: string;
      email: string;
    }
  >
>;

//Extract Return Type From an Async Function.

const fetchUser = async (id: string) => {
  return {
    id,
    name: "John Doe",
    email: "example@email.com",
  };
};

type User1 = ReturnType<typeof fetchUser>;

type UserMain = Awaited<User1>;

type test1 = Expect<
  Equal<
    User1,
    {
      id: string;
      name: string;
      email: string;
    }
  >
>;
