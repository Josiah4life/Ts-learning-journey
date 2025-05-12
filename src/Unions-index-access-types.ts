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

// type Group =
//   | ProgramModeMap["PLANNED_ONE_ON_ONE"]
//   | ProgramModeMap["PLANNED_SELF_DIRECTED"];

type key = "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED";

type Group = ProgramModeMap["PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED"];

type test = Expect<Equal<Group, "planned1on1" | "plannedSelfDirected">>;
