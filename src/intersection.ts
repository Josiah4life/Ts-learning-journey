import { type Expect, type Extends } from "@total-typescript/helpers";

type User = {
  name: string;
  email: string;
} & BaseEntity;

type Product = {
  name: string;
  price: number;
} & BaseEntity;

type BaseEntity = {
  id: string;
  createdAt: Date;
};

type tests = [
  Expect<
    Extends<
      User,
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      }
    >
  >,
  Expect<
    Extends<
      Product,
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      }
    >
  >
];

// Extends Object using Interface.

interface User1 extends BaseEntity1 {
  name: string;
  email: string;
}

interface Product1 extends BaseEntity1 {
  name: string;
  price: number;
}

interface BaseEntity1 {
  id: string;
  createdAt: Date;
}

type tests1 = [
  Expect<
    Extends<
      User1,
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      }
    >
  >,
  Expect<
    Extends<
      Product1,
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      }
    >
  >
];

// Extending Incompatible Properties

type UserPart = {
  id: string;
  name: string;
  age: number;
};

type UserPart2 = {
  id: number;
  phone: string;
};

type User2 = UserPart & UserPart2;

const user: User2 = {
  //@ts-expect-error id as never since types cannot resolve two identical id's that's another cons of intersection but using
  // Interface we can see more error concerning why that's happening
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};

//Comparing Types or Interface
