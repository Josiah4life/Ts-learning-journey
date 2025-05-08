import type { Expect, Equal } from "./basic";
import { expect, it } from "vitest";

// Example of intentional errors and type mismatch scenarios

type props = {
  first?: string; // Optional parameter
  last: string; // Required parameter
};

// Function that concatenates first and last name
const concatName = ({ first, last }: props) => {
  if (!last) {
    return first; // If no last name, return only first
  }

  return `${first} ${last}`; // Concatenate first and last name
};

// Correct usage, both first and last provided
const result3 = concatName({ first: "John", last: "Doe" }) as string;
type test3 = Expect<Equal<typeof result3, string>>;

// Intentionally missing the `first` parameter
const result4 = concatName({
  last: "Joe",
}) as string; // This would return string or undefined, depending on the type of `first`
type test4 = Expect<Equal<typeof result4, string>>;

// Correct way to call concatName with first and last
const result5 = concatName({ first: "John", last: "Doe" }); // "John Doe"
//@ts-expect-error
type test5 = Expect<Equal<typeof result5, string>>; // This will return string | undefined because of optional `first`

// Calling concatName with an empty first name, which is a valid case since `first` is optional
const result6 = concatName({ first: "John", last: "" }); // "John"
//@ts-expect-error
type test6 = Expect<Equal<typeof result6, string>>; // Expected result is string

// Another example function
const concatNames = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};

it("should return the full name", () => {
  const result = concatNames({
    first: "John",
    last: "Doe",
  });

  type test = Expect<Equal<typeof result, string>>; // Type test to ensure result is a string
  expect(result).toEqual("John Doe"); // Test the actual result
});
