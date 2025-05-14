interface FetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

const options = {
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },

  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
};

const myFetch = (options: FetchOptions) => {};

myFetch({
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },

  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
});
