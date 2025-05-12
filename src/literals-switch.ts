import { expect, it } from "vitest";

const getResolvedIconSize = (
  iconSize: "smal" | "medium" | "large" | string
) => {
  switch (iconSize) {
    case "small":
      return 16;
    case "medium":
      return 32;
    case "large":
      return 48;
    default:
      return iconSize;
  }
};

// It does't give autocomplete for "small", "medium", "large". Therefore the size can't be narrowed as it's treated as plain "string"
// Using ( string & {} ) will make it possible for size to be narrowed to literal strings.
getResolvedIconSize("");

function validateUsername(username: string | null): boolean {
  const isUsernameOkay = typeof username === "string";
  const isUsernameNull = typeof username === "object";
  const isUsernameOkayy = !!username;

  if (typeof username != "string") {
    return false;
  }

  if (isUsernameNull) {
    return false;
  }

  if (isUsernameOkay) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
