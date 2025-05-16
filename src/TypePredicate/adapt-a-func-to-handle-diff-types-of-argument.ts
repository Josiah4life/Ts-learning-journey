// Function Overload
function sum(values: { a: number; b: number }): number;
function sum(a: number, b: number): number;
function sum(
  valuesorA:
    | {
        a: number;
        b: number;
      }
    | number,
  b?: number
): number {
  if (typeof valuesorA === "object") {
    return valuesorA.a + valuesorA.b;
  }

  return valuesorA + b!;
}
