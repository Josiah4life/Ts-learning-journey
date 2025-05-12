type ButtonAttributes = { type: "button" | "submit" | "reset" };

// Here this type can be mutuated since type can be nututated.
// let type = "button";

// This get inferred as that type "button" using const
const type = "button";

const buttonAttributes: ButtonAttributes = {
  type,
};

/* ----------------------------- */

type ButtonAttributes1 = {
  type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes1) => {};

const buttonAttributes1: ButtonAttributes1 = {
  type: "button",
};

modifyButtons(buttonAttributes1);

// Example 2

const modifyButtons1 = (attributes: ButtonAttributes1[]) => {};

const buttonsToChange: ButtonAttributes1[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons1(buttonsToChange);
