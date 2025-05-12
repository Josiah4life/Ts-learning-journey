import { expect, it } from "vitest";
import type { Equal, Expect } from "./basic";

type APIResponse = { data: { id: string } } | { error: string };

const handleResponse = (response: APIResponse) => {
  if ("data" in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

it("Should handle a response with data", () => {
  const response = {
    data: {
      id: "123",
    },
  };
});

//Narrow in different scopes problems

const findUsersByName = (
  searchParams: {
    name?: string;
  },
  users: {
    id: string;
    name: string;
  }[]
) => {
  const searchParamsName = searchParams.name;
  if (searchParamsName) {
    return users.filter((user) => user.name.includes(searchParamsName));
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ]
  );
  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<
    Equal<
      typeof result,
      {
        id: string;
        name: string;
      }[]
    >
  >;
});

// Narrowing with switch true

type Circe = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circe | Square;

function calcualteArea2(shape: Shape) {
  switch (true) {
    case shape.kind === "circle":
      return Math.PI * shape.radius;
    case shape.kind === "square":
      return shape.sideLength * shape.sideLength;
  }
}
it("Should calculate the area of a circle", () => {
  const result = calcualteArea2({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.5398163374483);
});

it("Should calculate the area of a square", () => {
  const result = calcualteArea2({
    kind: "square",
    sideLength: 5,
  });

  type test = Expect<Equal<typeof result, number>>;
});
