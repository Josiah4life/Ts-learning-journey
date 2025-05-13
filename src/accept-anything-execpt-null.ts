const acceptAnythingExecptNullOrUndefined = (input: {}) => {};

acceptAnythingExecptNullOrUndefined("hello");
acceptAnythingExecptNullOrUndefined(42);
acceptAnythingExecptNullOrUndefined(true);
acceptAnythingExecptNullOrUndefined(Symbol("foo"));
acceptAnythingExecptNullOrUndefined({});
acceptAnythingExecptNullOrUndefined([]);
acceptAnythingExecptNullOrUndefined(() => {});
acceptAnythingExecptNullOrUndefined(/foo/);
acceptAnythingExecptNullOrUndefined(new Error("foo"));

acceptAnythingExecptNullOrUndefined(
  //@ts-expect-error
  null
);

acceptAnythingExecptNullOrUndefined(
  //@ts-expect-error
  undefined
);
