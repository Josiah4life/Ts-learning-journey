import { expect, it } from "vitest";

class CanvasNode {
  readonly x: number;
  readonly y: number;
  xeba: string = "";
  oxeba: string = "";

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  rattaour(xeba: string, oxeba: string) {
    this.xeba = xeba;
    this.oxeba = oxeba;
  }
}

it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  //@ts-expect-error Property is readonly
  canvasNode.y = 20;
});

//Another

class Animal {
  xeba: string = "";
  oxeba: string = "";

  // This method sets the properties after the object is created
  rattaour(xeba: string, oxeba: string) {
    this.xeba = xeba;
    this.oxeba = oxeba;
  }
}

const animal = new Animal(); // No values yet
animal.rattaour("dog", "rat"); // Now values are set

console.log(animal.xeba); // "dog"
console.log(animal.oxeba); // "rat"

//Another

class Name {
  xeba: string = "";
  oxeba: string = "";

  // This method sets the properties after the object is created
  rattaour = (xeba: string, oxeba: string) => {
    this.xeba = xeba;
    this.oxeba = oxeba;
  };
}

const setnames = new Name(); // No values yet
setnames.rattaour("john", "tolu"); // Now values are set

console.log(setnames.xeba); // "john"
console.log(setnames.oxeba); // "tolu"

class Animal1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log("My name is", this.name);
  }
}

const dog = new Animal1("Rex");

// const callback = dog.speak(); // ← 👈 this CALLS speak immediately

// instead

const callback = dog.speak;

callback(); //OR

const callback1 = dog.speak.bind(dog); // keeps 'this' correct
callback1(); // "My name is Rex"

// Creating Constructor for Classes

class Number {
  x: number;
  y: number;

  constructor(opts?: { x: number; y: number }) {
    this.x = opts?.x || 0;
    this.y = opts?.y || 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const number = new Number();

number.move(10, 20);

const number1 = new Number({
  x: 40,
  y: 70,
});
