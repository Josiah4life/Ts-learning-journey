/**
 * How do we annotate the errors this function throws?
 */

type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (
  id: string
):
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      error: SyntaxError | DOMException;
    } => {
  try {
    const user = localStorage.getItem(id);

    if (!user) {
      return {
        success: true,
        data: undefined,
      };
    }

    return {
      success: true,
      data: JSON.parse(user),
    };
  } catch (e) {
    if (e instanceof DOMException) {
      return {
        success: false,
        error: e,
      };
    }
    if (e instanceof SyntaxError) {
      return {
        success: false,
        error: e,
      };
    }
    throw e;
  }
};

const user = getUserFromLocalStorage("user-1");

if (user.success) {
  user.data;
} else {
  user.error;
}

// try {
//   const user = getUserFromLocalStorage("user-1");
// } catch (
// How do we make this typed as PossibleErrors?
// e

// )
//  {
//   if (e instanceof SyntaxError || e instanceof DOMException) {
//     const typedErr: PossibleErrors = e

//     console.error("KnownErr", typedErr.message)
//   } else {
//     console.error("Unknown err", e)
//   }
// }
