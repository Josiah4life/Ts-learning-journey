import type { Expect, Equal } from "@total-typescript/helpers";

const routes = {
  "/": {
    component: "Home",
  },
  "/about": {
    component: "About",
    // @ts-expect-error
    search: "?foo=bar",
  },
} as const satisfies Record<
  string,
  {
    component: string;
  }
>;

// @ts-expect-error
routes["/"].component = "About";

type tests = [
  Expect<Equal<(typeof routes)["/"]["component"], "Home">>,
  Expect<Equal<(typeof routes)["/about"]["component"], "About">>
];

// Using "satisfies" keyword we enforce that the values matches the structure in Record without losing precision on the value itself.
