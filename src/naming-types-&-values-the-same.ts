export const Logger = {
  log: (message: string) => {
    console.log(message);
  },
  info: (message: string) => {
    console.info(`INFO: ${message}`);
  },
  warn: (message: string) => {
    console.warn(`WARNING: ${message}`);
  },
  error: (message: string) => {
    console.error(`ERROR: ${message}`);
  },
};

export type Logger = typeof Logger;

// Here

import { Logger } from "this-page";

const MyApp = (logger: Logger) => {
  logger.log("Hello");
  logger.info("Hello");
  logger.warn("Hello");
  logger.error("Hello");
};
