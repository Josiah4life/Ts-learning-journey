import type { Expect, Equal } from "@total-typescript/helpers";

interface User extends NameAndEmail {
  id: string;
  role: string;
}

interface NameAndEmail {
  name: string;
  email: string;
}

const fetchUser = async (): Promise<NameAndEmail> => {
  const response = await fetch("/api/user");
  const user = (await response.json()) as NameAndEmail;
  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};

// We can solve this using a different approach <Pick>

interface User1 {
  id: string;
  role: string;
  name: string;
  email: string;
}

const fetchUser1 = async (): Promise<Pick<User1, "name" | "email">> => {
  const response = await fetch("/api/user");
  const user = (await response.json()) as NameAndEmail;
  return user;
};

const example1 = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};

// Exclude a Property from an Interface

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const addProduct = (productInfo: Omit<Product, "id">) => {
  //Do something with the productInfo
};

type ProductWithoutId = Omit<Product, "id">;

addProduct({
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

addProduct({
  // @ts-expect-error
  id: 1,
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

//Partial Utility Type
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type PartialProduct = Partial<Product>;

const updateProduct = (
  id: number,
  productInfo: Partial<Omit<Product, "id">>
) => {
  //Do something with the productInfo
};

// Should be able to update individual pieces of info

updateProduct(1, {
  name: "Book",
});

updateProduct(1, {
  price: 12.99,
});

updateProduct(1, {
  price: 21,
  description: "Jolly item",
});
