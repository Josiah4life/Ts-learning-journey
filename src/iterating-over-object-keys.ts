import { it, vitest, expect } from "vitest";

interface User {
  id: number;
  name: string;
}

function printUser(user: Record<string, any>) {
  Object.keys(user)
    // as(... Array<keyof User>).forEach
    .forEach((key) => {
      console.log(user[key]);
    });
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});

function printUser(user: Record<string, any>) {
  for (const key in user) {
    console.log(user[key]);
  }
}
