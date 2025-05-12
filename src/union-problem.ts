import type { Expect, Equal } from "@total-typescript/helpers";

function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}

const result = getUsername("Alice");

type test = Expect<Equal<typeof result, string>>;

const result2 = getUsername(null);

type test2 = Expect<Equal<typeof result2, string>>;

type SuccessCode = "200" | "201" | "204";
type ErrorCode = "400" | "401" | "404" | "500";
type HttpCode = ErrorCode | SuccessCode;

const handleErrorCase = (code: ErrorCode) => {
  // An imaginary func. where we only handle the errors

  type test = Expect<Equal<typeof code, "400" | "401" | "404" | "500">>;
};

const handleSuccessCase = (code: SuccessCode) => {
  // An imaginary func. where we only handle the errors

  type test = Expect<Equal<typeof code, "200" | "201" | "204">>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary func. where we only handle the errors

  type test = Expect<
    Equal<typeof code, "400" | "401" | "404" | "500" | "200" | "201" | "204">
  >;
};
