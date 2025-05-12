// Adding readyonly can solve this. readonly string[] | ReadonlyArray<string>
function printNames(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }

  //@ts-expect-error
  names.push("john");

  //@ts-expect-error
  names[0] = "Billy";
}

// Distinguishing Assignability Between Read-Only and Mutable Arrays

function printNamesReadonly(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }
}

function printNamesMutable(names: string[]) {
  for (const name of names) {
    console.log();
  }
}

//Mutable arrays are assignable to readonly arrays

const mutableNames = ["john", "jane", "mike"];

printNamesReadonly(mutableNames);
printNamesMutable(mutableNames);

//Readonly arrays are not assignable to mutable arrays

const readonlyNames = ["john", "jane", "mike"] as const;

printNamesReadonly(readonlyNames);
printNamesMutable(readonlyNames);
