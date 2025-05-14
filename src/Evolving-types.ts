import type { Expect, Equal } from "@total-typescript/helpers";

let selectedId;

// We CAN DECLARE SELECTED ID WITHOUT ASSIGNING ANY VALUE THEN OT WILL BE TYPED AS ANY WHICH WILL KEEP ON EVOLVING BASED ON
// THE VALUE PASSED INTO IT

selectedId = 123;

type test = Expect<Equal<typeof selectedId, number>>;

selectedId = "123";

type test2 = Expect<Equal<typeof selectedId, string>>;

// Same thing with Array

const arr = [];

arr.push(9);

arr[0];

type test = Expect<Equal<typeof arr, number[]>>;

arr.push("abc");

type test2 = Expect<Equal<typeof arr, (number | string)[]>>;
