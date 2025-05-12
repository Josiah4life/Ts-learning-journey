// Parameter Properties

import { expect, it, vi } from "vitest";

class CanvasNode {
  constructor(private x: number, private y: number) {}

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get postion() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

it("Should start in the given postion", () => {
  const node = new CanvasNode(10, 20);
  expect(node.postion).toEqual({
    x: 10,
    y: 20,
  });
});

// Enums

const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

function log(opts: { globalLogLevel: number; level: number; message: string }) {
  if (opts.level >= opts.globalLogLevel) {
    console.log(opts.message);
  }
}

it("Should log if the level is higher than the global log level", () => {
  const consoleLog = vi.spyOn(console, "log");
  log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.ERROR,
    message: "Hello!",
  });

  expect(consoleLog).toHaveBeenCalledWith("Hello");
});

it("Should log if the level is equal to the global log level", () => {
  const consoleLog = vi.spyOn(console, "log");

  log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.INFO,
    message: "Hello!",
  });

  expect(consoleLog).toHaveBeenCalledWith("Hello");
});
