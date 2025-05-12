
// We can create types from values...

import { describe, expect, it } from "vitest";

const user = {
  id: 1,
  name: "Wasap"
}

type UserFromValue = typeof user;

// ...so why not values from types? 

interface User {
  id: number,
  name: string
}

// Can we do this? 
// const user = valueof User;


// We can't derive values from types but we can types from values.

// Deriving Types with Classes

class CanvasNode {
  x = 0;
  y = 0

  move(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const positionFromCanvasNode = (node: CanvasNode) => {
  return {
    x: node.x
    y: node.y
  }
}


describe("positionFromCanvasNode", () => {
  it("Should return the position of the node", () => {
    const canvasNode = new CanvasNode();

    expect(positionFromCanvasNode(canvasNode)).toEqual({
      x: 0,
      y: 0
    })

    canvasNode.move(10, 20)

    expect(positionFromCanvasNode(canvasNode)).toEqual({
      x:10, y: 20
    })
  })
})