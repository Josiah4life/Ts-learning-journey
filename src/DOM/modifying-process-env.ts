import "dotenv/config";

import type { Equal, Expect } from "@total-typescript/helpers";

const envVariable = process.env.MY_ENV_VAR;

if (!envVariable) {
  throw new Error("Env variable not assigned");
}

type test = Expect<Equal<typeof envVariable, string>>;
