// Define ShoppingCart type, which expects userId as a string and items as an array of strings
type ShoppingCart = {
  userId: string;
  items: Array<string>; // You could also use string[] here instead of Array<string>
};

// Function to process the shopping cart
const processCart = (cart: ShoppingCart) => {
  // Example function body that processes the cart
  // Do something with cart, like displaying cart info
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

// Define Recipe type, which expects a title, instructions, and ingredients (array of Ingredient)
type Recipe = {
  title: string;
  instructions: string;
  ingredient: Array<Ingredient>; // Array of ingredients
};

// Define Ingredient type, which expects a name and quantity (both strings)
type Ingredient = {
  name: string;
  quantity: string;
};

// Function to process a recipe
const processRecipe = (recipe: Recipe) => {
  // Example function body that processes the recipe
  // For example, access the quantity of the first ingredient
  console.log(recipe.ingredient[0].quantity);
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredient: [
    {
      name: "Flour",
      quantity: "2 cups",
    },
  ],
  instructions: "...",
});
