import type { Expect, Equal } from "@total-typescript/helpers";

interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  roles: string[];
}

function assetIsAdminUser(user: User | AdminUser): asserts user is AdminUser {
  if (!("roles" in user)) {
    throw new Error("User is not an admmin");
  }
}

const handleRequest = (user: User | AdminUser) => {
  type test = Expect<Equal<typeof user, User | AdminUser>>;

  assetIsAdminUser(user);

  type test2 = Expect<Equal<typeof user, AdminUser>>;

  user.roles;
};
