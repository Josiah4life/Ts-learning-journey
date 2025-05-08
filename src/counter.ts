export function setupCounter(element: HTMLButtonElement) {
  let counter = 0; // Initialize counter to 0

  // Helper function to set the counter value and update the button's innerHTML
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`; // Update button text with the new count
  };

  // Add click event listener to the button
  element.addEventListener("click", () => setCounter(counter + 1)); // Increment counter on click

  // Initialize the counter display to 0
  setCounter(0);
}
