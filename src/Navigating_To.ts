//You can use got to definition to jump to the definition of something.
//On mac "Cmd + LeftClick"
//On window "Ctrl + LeftClick"

const myFunction = () => {
  console.log("Hello");
};

myFunction();

myFunction();

//This can work across files, too

import { hiThere } from "./dummy-import";

hiThere();

// As well as on types
type Example = PropertyKey;
