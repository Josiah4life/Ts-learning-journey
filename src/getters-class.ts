import { expect, it } from "vitest";

class CanvasNode {
  x;
  y;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({
    x: 0,
    y: 0,
  });

  canvasNode.move(10, 20);

  expect(canvasNode.position).toEqual({
    x: 10,
    y: 20,
  });
});

it("Should be able to recieve an intial postion", () => {
  const canvasNode = new CanvasNode({
    x: 10,
    y: 20,
  });

  expect(canvasNode.position).toEqual({
    x: 10,
    y: 20,
  });
});

//Another

interface ShapeOptions {
  x: number;
  y: number;
}

type IShape = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  move: (deltaX: number, deltaY: number) => void;
};

class Shape implements IShape {
  #x: number;
  #y: number;

  id = "a";

  constructor(initial?: ShapeOptions) {
    this.#x = initial?.y ?? 0;
    this.#y = initial?.x ?? 0;
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }
}
