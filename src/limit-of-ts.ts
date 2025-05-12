// Demonstrates the limits and loopholes of type assertions in TypeScript

// Basic primitives do not have 'sufficient overlap'

// ❌ This will error: you can't assert a string directly to a number
// @ts-expect-error
const num1 = "Hello" as number;

//  This works, but goes through 'unknown', so TypeScript can't catch issues
const num2 = "hello" as unknown as number;

//  This works too, but 'any' disables type checking entirely
const num3 = "hello" as any as number;

//  Also works, 'never' allows anything to be assigned to anything
const num4 = "hello" as never as number;

// Objects with ZERO compatible properties also don't have sufficient overlap
interface Dog {
  bark(): void;
}

const cat = {
  meow() {},
};

// ❌ Not compatible directly — no overlapping structure
// @ts-expect-error
const dog1 = cat as Dog;

//  Compiles via unknown — you bypass the structural mismatch
const dog2 = cat as unknown as Dog;

//  Also works with any — no type safety
const dog3 = cat as any as Dog;

//  'never' allows casting to anything
const dog4 = cat as never as Dog;
