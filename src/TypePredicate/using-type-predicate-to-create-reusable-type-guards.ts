const hasDataAndId = (
  value: unknown
): value is {
  data: {
    id: string;
  };

  //This is a type predicate. It turns the function into a type guard which asserts this 'is' statement.
} => {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  );
};

const parsedValue = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

const parsedValueAgain = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }
  throw new Error("Parsing error!");
};
