import type { Expect, Equal } from "@total-typescript/helpers";

// this exists elsewhere; here’s the type No implementation.
declare const DEBUG: {
  getState: () => {
    id: string;
  };
};

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
