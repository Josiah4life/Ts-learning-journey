const createStringMap = <T>() => {
  return new Map<string, T>();
};

const numberMap = createStringMap<number>();

numberMap.set("foo", 123);

// @ts-expect-error boolean not assignable to number
numberMap.set("bar", true);

const objMap = createStringMap<{ a: number }>();

objMap.set("foo", { a: 123 });

objMap.set(
  "bar",
  // @ts-expect-error
  { b: 123 }
);
