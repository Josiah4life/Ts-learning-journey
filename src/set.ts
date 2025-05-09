const userIds = new Set<number>();
const userIds2: Set<number> = new Set();

userIds.add(1);
userIds.add(2);
userIds.add(3);

//@ts-expect-error
userIds.add("123");

//@ts-expect-error
userIds.add({
  name: "Max",
});
