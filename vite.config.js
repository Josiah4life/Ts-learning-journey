// vite.config.js
import checker from "vite-plugin-checker";
export default {
  plugins: [
    checker({
      // vueTsc: {
      //   tsconfigPath: "",
      // },
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
};
