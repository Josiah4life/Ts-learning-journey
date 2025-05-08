import type { Expect, Equal } from "@total-typescript/helpers";

// Function to set a range as a tuple
const setRange = (range: [x: number, y: number]) => {
  const x = range[0];
  const y = range[1];

  // Do something with x and y in here
  // x and y should both be numbers!

  type tests = [
    Expect<Equal<typeof x, number>>, // x must be of type number
    Expect<Equal<typeof y, number>> // y must be of type number
  ];
};

setRange([0, 10]);

// These are intentionally incorrect calls to test type checking
// @ts-expect-error: string is not assignable to number
setRange([0, "10"]); // Error: "10" is a string, but y expects a number

// @ts-expect-error: too few arguments
setRange([0]); // Error: Missing the second argument for y

// @ts-expect-error: too many arguments
setRange([0, 10, 20]); // Error: Too many arguments (expected only two)

const goToLocation = (
  coordinates: [
    latitude: number,
    longitude: number,
    elevation?: number | undefined
  ]
) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];

  // Do something with latitude, longitude, and elevation in here

  type tests = [
    Expect<Equal<typeof latitude, number>>, // latitude must be a number
    Expect<Equal<typeof longitude, number>>, // longitude must be a number
    Expect<Equal<typeof elevation, number | undefined>> // elevation can be number or undefined
  ];
};

goToLocation([10, 20]);

// @ts-expect-error: string is not assignable to number
goToLocation([10, "20"]); // Error: "20" is a string, but longitude expects a number

goToLocation([10, 20, 30]); // Valid, as elevation is optional
