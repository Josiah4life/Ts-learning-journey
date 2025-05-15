import { T } from "vitest/dist/chunks/reporters.d.DG9VKi4m.js";

type ErrorShape = {
  error: {
    message: string;
  };
};

// type UserDataShape =
//   | {
//       data: {
//         id: string;
//         name: string;
//         email: string;
//       };
//     }
//   | ErrorShape;

/**
 * The data shape we get back from the API
 */
type DataShape<TData> = { data: TData } | ErrorShape;

type PostDataShape = DataShape<{
  id: string;
  title: string;
  body: string;
}>;

type UserDataShape = DataShape<{
  id: string;
  name: string;
  email: string;
}>;

type ResponseShape<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      message: string;
      name?: string;
      stack?: string;
      // error: {
      //   message: string;
      //   name?: string;
      //   stack?: string;
      // };
    };

type UserResponse = ResponseShape<{
  id: string;
  name: string;
  email: string;
}>;

function GetUserById(id: string): UserResponse {
  //@ts-expect-error
  const user = database.findUser(id);

  if (!user.success) {
    return {
      success: false,
      name: "Data Failed",
      message: "Unable to retrieve data",
    };
  }

  return {
    success: true,
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

const GetuserByEmail = (email: string): ResponseShape<any> => {
  // @ts-expect-error
  const user = database.findUser(email);

  if (!user || !user.success) {
    return {
      success: false,
      name: "UserNotFound",
      message: "No user found with that email",
    };
  }

  return {
    success: true,
    data: user,
  };
};
