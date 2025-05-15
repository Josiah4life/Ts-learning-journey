import type { Expect, Equal } from "@total-typescript/helpers";

type Example1 = PromiseFunc<string, string>;

type test1 = Expect<Equal<Example1, (input: string) => Promise<string>>>;

type Example2 = PromiseFunc<boolean, number>;

type test2 = Expect<Equal<Example2, (input: boolean) => Promise<number>>>;

type PromiseFunc<Tinput, Toutput> = (input: Tinput) => Promise<Toutput>;

// 1. Define a function using it
const getUserNameById: PromiseFunc<number, string> = async (id) => {
  // simulate fetching user name
  const userName = `User-${id}`;
  return userName;
};

// 2. Use it
async function exampleUsage() {
  const name = await getUserNameById(42);
  console.log(name); // "User-42"
}

// 1. Define a function using it
const getUserNameById: PromiseFunc<number, string> = async (id) => {
  // simulate fetching user name
  const userName = `User-${id}`;
  return userName;
};

// 2. Use it
async function exampleUsage() {
  const name = await getUserNameById(42);
  console.log(name); // "User-42"
}
