type Environment = "development" | "production" | "staging";

type Configurations = Record<
  Environment,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;

const configurations: Configurations = {
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
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

type Environment1 = "development" | "production" | "staging";

type Configurations1 = {
  [Env in Environment]: {
    apiBaseUrl: Env;
    timeout: number;
  };
};

const configurations1: Configurations1 = {
  development: {
    apiBaseUrl: "development",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "production",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};
