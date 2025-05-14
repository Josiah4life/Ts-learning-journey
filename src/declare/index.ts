import type { Expect, Equal } from "@total-typescript/helpers";
import { Myinterface, Mytype } from "./can-export";

type test = Expect<Equal<Mytype, string>>;
type test2 = Expect<Equal<Myinterface, { myProp: string }>>;
