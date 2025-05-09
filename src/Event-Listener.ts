// No type safety on listener here
const addClickEventListener = (listener) => {
  document.addEventListener("click", listener);
};

// Correct usage: anonymous function passed as listener
addClickEventListener(() => {
  console.log("Clicked!");
});

// Now typed correctly: listener must be a function that returns void
const addClickEventListenervoid = (listener: () => void) => {
  document.addEventListener("click", listener);
};

const listener = () => {
  console.log("Clicked!");
};

// Passes the named listener
addClickEventListenervoid(listener);

// Intentional error: "abc" is not a function
addClickEventListener(
  // @ts-expect-error
  "abc"
);
