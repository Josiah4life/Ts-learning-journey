import type { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Circe = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circe | Square;

function calcualteArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}

it("Should calculate the area of a circle", () => {
  const result = calcualteArea({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.5398163374483);
});

it("Should calculate the area of a square", () => {
  const result = calcualteArea({
    kind: "square",
    sideLength: 5,
  });

  type test = Expect<Equal<typeof result, number>>;
});

// Destructuring a discriminated union solution
function calcualteArea1(shape: Shape) {
  if (shape.kind === "circle") {
    const { radius } = shape;
    return Math.PI * radius;
  } else {
    const { sideLength } = shape;
    return sideLength * sideLength;
  }
}
it("Should calculate the area of a circle", () => {
  const result = calcualteArea1({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.5398163374483);
});

it("Should calculate the area of a square", () => {
  const result = calcualteArea1({
    kind: "square",
    sideLength: 5,
  });

  type test = Expect<Equal<typeof result, number>>;
});

//Destrucuring a discriminated union with a switch statement

function calcualteArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;
    case "square":
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

// Destructuring a discriminated tuple problem

type User = {
  id: string;
};

type APIResponse = ["error", string] | ["success", User[]];

async function fetchData(): Promise<APIResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [
        "error",
        //Image some improved error handling here
        "An error occured",
      ];
    }

    const data = await response.json();
    return ["success", data];
  } catch (error) {
    return ["error", "An error occured"];
  }
}

async function exampleFunc() {
  const [status, value] = await fetchData();

  if (status === "success") {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.log(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}

//Discriminated Boolen Problem

type APIResponse1 = [true, User[]] | [false, string];

async function fetchData1(): Promise<APIResponse1> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [
        false,
        //Image some improved error handling here
        "An error occured",
      ];
    }

    const data = await response.json();
    return [true, data];
  } catch (error) {
    return [false, "An error occured"];
  }
}

async function exampleFunc1() {
  const [succceded, value] = await fetchData1();

  if (succceded) {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.log(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
