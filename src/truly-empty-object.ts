// const acceptOnlyEmptyObject = (input: Record<PropertyKey, never>) => {};

declare const tag: unique symbol;
type EmptyObject = { [tag]?: never };

const acceptOnlyEmptyObject = (input: EmptyObject) => {};

// @ts-expect-error
acceptOnlyEmptyObject("hello");

acceptOnlyEmptyObject({
  // @ts-expect-error
  a: 1,
});

// @ts-expect-error
acceptOnlyEmptyObject(true);

// @ts-expect-error
acceptOnlyEmptyObject(Symbol("foo"));

acceptOnlyEmptyObject({}); // ✅ This is the only allowed input

// @ts-expect-error
acceptOnlyEmptyObject([]);

// @ts-expect-error
acceptOnlyEmptyObject(() => {});

// @ts-expect-error
acceptOnlyEmptyObject(/foo/);

// @ts-expect-error
acceptOnlyEmptyObject(new Error("foo"));

// @ts-expect-error
acceptOnlyEmptyObject(undefined);

// @ts-expect-error
acceptOnlyEmptyObject(null);
