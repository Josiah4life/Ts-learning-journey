import { expect, it } from "vitest";

class CanvasNode {
  private x;
  public y;

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

  set position(pos) {
    this.x = pos.y;
    this.y = pos.y;
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

it("Should not be able to access x and y from the outside", () => {
  const canvasNode = new CanvasNode();

  // @ts-expect-error
  expect(canvasNode.x).toEqual(undefined);
  expect(canvasNode.y).toEqual(undefined);
});

it("Should let you set the position", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({ x: 0, y: 0 });

  canvasNode.position = {
    x: 10,
    y: 20,
  };
  expect(canvasNode.position).toEqual(undefined);
});

// We can also add # whiout needing to add private

// Extending other classes

type ViewMode = "hidden" | "visible" | "selected";

class Shape {
  #x: number;
  #y: number;

  constructor(options?: { x: number; y: number }) {
    this.#x = options?.x ?? 0;
    this.#y = options?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}

class CanvasNode1 extends Shape {
  #viewMode: ViewMode;

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    super(options);
    this.#viewMode = options?.viewMode ?? "visible";
  }

  hide() {
    this.#viewMode = "hidden";
  }

  get isHidden() {
    return this.#viewMode === "hidden";
  }

  get isSelected() {
    return this.#viewMode === "selected";
  }
  get isVisible() {
    return this.#viewMode === "visible";
  }
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode1();

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

it("Should be able to recieve an initial position", () => {
  const canvasNode = new CanvasNode1({
    x: 10,
    y: 20,
  });

  expect(canvasNode.position).toEqual({
    x: 10,
    y: 20,
  });
});

it("Should be not be able to access x and y from the outside", () => {
  const canvasNode = new CanvasNode1();

  expect(
    // @ts-expect-error
    canvasNode.x
  ).toEqual(undefined);
});
