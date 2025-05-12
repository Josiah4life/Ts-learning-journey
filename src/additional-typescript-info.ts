// @lib: dom,es2023,dom.iterable

import { expect, it } from "vitest";

// @errors: 2345
const handleFormData = (e: SubmitEvent) => {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const value = Object.fromEntries(data.entries());
  return value;
};

it("Should handle a form submit", () => {
  const form = document.createElement("form");
  form.innerHTML = `
  <input name="name" value="John Doe" />
  `;

  form.onsubmit = (e) => {
    const value = handleFormData(e);
    expect(value).toEqual({
      name: "John Doe",
    });
  };

  form.requestSubmit();
});

// At runtime, this code works flawlessly. However, at the type level, TypeScript shows an error under e.target. Your task is to provide TypeScript with additional information in order to resolve the error.
// Argument of type 'EventTarget | null' is not assignable to parameter of type 'HTMLFormElement | undefined'.
//   Type 'null' is not assignable to type 'HTMLFormElement | undefined'
