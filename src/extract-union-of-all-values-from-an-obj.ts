import type { Expect, Equal } from "@total-typescript/helpers";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeMap = typeof programModeEnumMap;

type key = "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED";

type Group = ProgramModeMap[keyof ProgramModeMap];

type test = Expect<
  Equal<
    Group,
    | "planned1on1"
    | "plannedSelfDirected"
    | "group"
    | "selfDirected"
    | "1on1"
    | "announcement"
  >
>;

// Create a unipn from an as const array problems

export const programModes = [
  "group",
  "announcement",
  "1on1",
  "selfDirected",
  "planned1on1",
  "plannedSelfDirected",
] as const;

type AllPrograms = (typeof programModes)[number];

type test1 = Expect<
  Equal<
    AllPrograms,
    | "group"
    | "announcement"
    | "1on1"
    | "selfDirected"
    | "planned1on1"
    | "plannedSelfDirected"
  >
>;
