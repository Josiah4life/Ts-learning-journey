import { expect, it } from "vitest"; // Importing vitest functions for testing

type Rectangle = {
  width: number; // Width of the rectangle
  height: number; // Height of the rectangle
};

// Function to calculate the area of the rectangle
const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

// Function to calculate the perimeter of the rectangle
const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

// Unit test for getRectangleArea function
it("It should return the area of a rectangle", () => {
  const result = getRectangleArea({
    width: 10, // example width
    height: 20, // example height
  });

  // Checking if the result is correct (10 * 20 = 200)
  expect(result).toEqual(200); // Test assertion
});

// Unit test for getRectanglePerimeter function
it("It should return the perimeter of a rectangle", () => {
  const result = getRectanglePerimeter({
    width: 10, // example width
    height: 20, // example height
  });

  // Checking if the result is correct (2 * (10 + 20) = 60)
  expect(result).toEqual(60); // Test assertion
});
