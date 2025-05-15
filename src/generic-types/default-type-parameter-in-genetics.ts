type Result<TResult = string, TError = Error> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      error: TError;
    };

const createRandomNumber = (): Result<number> => {
  const num = Math.random();

  if (num > 0.5) {
    return {
      success: true,
      data: 123,
    };
  }

  return {
    success: false,
    error: new Error("Something went wrong"),
  };
};
