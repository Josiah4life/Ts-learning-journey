/**
 * --- Type Utilities ---
 *
 * These are types that help us compare types at the TypeScript type level.
 */

export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;

export type Expect<T extends true> = T;

/**
 * --- Functions ---
 *
 * These are basic functions with type annotations. I intentionally introduce type errors
 * for learning purposes.
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(1, 2);

// Type-level testing - Expect this to pass
// @ts-ignore
type test = Expect<Equal<typeof result, number>>; //This should pass

// Function that joins two strings (with an intentional error)
// @ts-expect-error a, b as any
const concatTwoStrings = (a, b): string => {
  return [a, b].join(" ");
};

const result2 = concatTwoStrings("Hello", "World");

// Type-level testing - Expect this to pass
// @ts-ignore
type test2 = Expect<Equal<typeof result2, string>>;

/**
 * --- Primitive Types ---
 *
 * Demonstrating basic primitive types.
 */

let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;
