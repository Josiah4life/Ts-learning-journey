import type { Equal, Expect } from "@total-typescript/helpers";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

// Keyof takes a Type and return the Union Key of the values
const inputs: Record<
  keyof FormValues,
  {
    initialValue: string;
    label: string;
  }
> = {
  name: {
    initialValue: "",
    label: "Name",
  },
  email: {
    initialValue: "",
    label: "Email",
  },

  password: {
    initialValue: "",
    label: "Password",
  },
};

// The typeof operator allows us to extract a type from a value

const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

type Configuration = typeof configurations;

type Environment = keyof Configuration; // OR

// type Environment = keyof typeof configuration

type test = Expect<
  Equal<Environment, "development" | "production" | "staging">
>;
