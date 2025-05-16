import type { Expect, Equal } from "@total-typescript/helpers";
import type { T } from "vitest/dist/chunks/environment.d.Dmw5ulng.js";

// Example showing a problem with the built-in Omit utility in TypeScript

// This uses TypeScript's built-in Omit<T, K> to try and remove the key "b" from the object { a: string }.
// BUT: "b" is not actually a key in the object type!
// TypeScript allows this without an error, silently ignoring "b".

type Example = Omit<{ a: string }, "b">;

//  Resulting type is still just { a: string } — "b" is ignored, no error is thrown.
//  This can lead to bugs or confusion in large codebases where you think you're removing a key that doesn't exist.
//  Consider using a StrictOmit utility that enforces key existence like so:
// type StrictOmit<T, K extends keyof T> = Omit<T, K>;

type StrictOmit<T, K extends keyof T> = Omit<T, K>;

type ShouldFail = StrictOmit<
  { a: string },
  // @ts-expect-error
  "b"
>;

type tests = [
  Expect<Equal<StrictOmit<{ a: string; b: number }, "b">, { a: string }>>,
  Expect<Equal<StrictOmit<{ a: string; b: number }, "b" | "a">, {}>>,
  Expect<
    Equal<StrictOmit<{ a: string; b: number }, never>, { a: string; b: number }>
  >
];
