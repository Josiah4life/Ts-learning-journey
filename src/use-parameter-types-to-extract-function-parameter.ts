import type { Equal, Expect } from "@total-typescript/helpers";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;
type SecondParameters = MakeQueryParameters[1];

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opt?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];
