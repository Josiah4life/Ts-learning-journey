import type { Equal, Expect } from "./basic";

// This function return never, because it never returns!
const getNever = () => {
  throw new Error("This function never returns");
};

const fn = (input: never) => {};

// Nothing is assignable to never!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

//Except for nevr itself

fn(getNever());

// But we can assign never to anything

const str: String = getNever();
const num: number = getNever();
const bool: boolean = getNever();
const arr: String[] = getNever();

//Never.Array Problem

type ShoppingCart = {
  items: string[];
};

const shoppingCart: ShoppingCart = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");

//Never Returning Problem

const throwError = (message: string): never => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  const id = params.id || throwError("No id provided");

  type test = Expect<Equal<typeof id, string>>;

  return id;
};
