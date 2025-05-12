import type { Expect, Equal } from "@total-typescript/helpers";
import { it, expect } from "vitest";

// This accepts any data types
const fn = (input: unknown) => {};

//Anything is assignable to unknown!
fn("hello");
fn(42);
fn([]);
fn({});
fn(() => []);
fn(true);

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    throw error;
  }
}

//Unknown Error in a Large Conditional Statement

const parseValue = (value: unknown) => {
  if (
    typeof value === "object" &&
    value != null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data != null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

it("Should handle a { data: { id: string } }", () => {
  const result = parseValue({
    data: {
      id: "123",
    },
  });

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toBe("123");
});

it("Should error when anything else is passed in", () => {
  expect(() => parseValue("123")).toThrow("Parsing error!");

  expect(() => parseValue(123)).toThrow("Parsing error!");
});
