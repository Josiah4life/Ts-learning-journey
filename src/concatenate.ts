import type { Expect, Equal } from "@total-typescript/helpers";
import { it, expect } from "vitest";

export function concatenate(...strings: string[]) {
  return strings.join(""); // Concatenates all the passed strings
}

it("should concatenate strings", () => {
  const result = concatenate("John", " ", "Doe");

  // Expected output should be "John Doe"
  expect(result).toEqual("John Doe");

  type test = Expect<Equal<typeof result, string>>; // Type check: result should be a string
});

export function concatenate1(num: number, strings: string[]) {
  return strings.join(""); // Concatenates the array of strings
}

it("should concatenate strings", () => {
  const result1 = concatenate1(1, ["John", " ", "Doe"]);

  // Expected output should be "John Doe"
  expect(result1).toEqual("John Doe");

  type test = Expect<Equal<typeof result1, string>>; // Type check: result1 should be a string
});
