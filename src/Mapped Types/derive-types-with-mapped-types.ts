//  This example demonstrates how to use a **mapped type**
// to create a new type where each property of an object is turned into a function
// that returns the value of that property.

import type { Expect, Equal } from "@total-typescript/helpers";

// 🔍 `Attributes` is the original object shape
interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

//  `AttributeGetters` maps over each key in `Attributes`
// and transforms the property type into a function returning that type.
// So: `firstName: string` becomes `firstName: () => string`
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

//  Type test using Total TypeScript's helpers
// This confirms that `AttributeGetters` has the expected structure:
// Each property is now a function returning the original value type.

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >
];

/**
 * Use Case -
 */

type FormFieldGetters<T> = {
  [K in keyof T]: () => T[K];
};

type UserFormValues = {
  email: string;
  password: string;
};

const formGetters: FormFieldGetters<UserFormValues> = {
  email: () => "test@example.com",
  password: () => "secure123",
};

// OR

const userAttributes: AttributeGetters = {
  firstName: () => "Joyboy",
  lastName: () => "D.",
  age: () => 25,
};

console.log(userAttributes.firstName()); // "Joyboy"

// OR

type LazyProps<T> = {
  [K in keyof T]: () => T[K];
};

// Useful for injecting config or expensive computations:
const config: LazyProps<{ dbUrl: string; debug: boolean }> = {
  dbUrl: () => process.env.DB_URL!,
  debug: () => process.env.NODE_ENV !== "production",
};
