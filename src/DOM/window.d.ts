interface Window {
  DEBUG: {
    getState: () => {
      id: string;
    };
  };
}

// OR we do this in a file using declare global

// declare global {
//   interface Window {
//     DEBUG: {
//       getState: () => {
//         id: string;
//       };
//     };
//   }
// }
