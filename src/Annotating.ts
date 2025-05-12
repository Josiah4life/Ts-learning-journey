import { expect, it } from "vitest";

function add(this: { x: number }) {
  return this.x + this.y;
}

const setValues = (x: number, y: number) => {
  this.x = x;
  this.y = y;
};

it("Should add the numbers together", () => {
  const calcualtor = {
    x: 0,
    y: 0,

    add,
    setValues,
  };

  calcualtor.setValues(1, 2);

  expect(calcualtor.add()).toEqual(3);
});

//
