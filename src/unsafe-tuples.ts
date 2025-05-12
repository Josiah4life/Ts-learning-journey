// Read-only can save us.
type Coordinate = [number, number];
type Coordinate1 = readonly [number, number];

const myHouse: Coordinate = [0, 0];
myHouse[1] = 32;

const dangerousFunction = (arrayofNumbers: readonly number[]) => {
  arrayofNumbers.pop();
  arrayofNumbers.pop();
};

dangerousFunction(
  // // @ts-expect-error
  myHouse
);

// We include the readonly to the function also because we can assign readonly array to a mutable function
