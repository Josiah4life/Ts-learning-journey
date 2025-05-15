import type { Equal, Expect } from "@total-typescript/helpers";

const array = [1, 2, 3];

const mightNotExist = array[3];

type test = Expect<Equal<typeof mightNotExist, number | undefined>>;

// We need a tscofig line
// "noUncheckedIndexedAccess": true

// OR in our package.json

/* "scripts": {
      "dev": "tsc --watch --noEmit"
}

*/
