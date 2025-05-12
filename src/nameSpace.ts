namespace GeomentryUtils {
  export namespace Circle {
    export function calcualteArea(radius: number) {
      // Implementation
    }

    export function calculateCircumference(radius: number) {
      // implementation
    }
  }

  export namespace Rectangle {
    export interface Rectangle {
      width: number;
      height: number;
    }

    export function calcualteArea(rect: Rectangle) {
      // Implementation
    }

    export function calculatePerimeter(rect: Rectangle) {
      // Implementaion
    }
  }
}

// Can be use as values
GeomentryUtils.Circle.calcualteArea(10);

// Can be use as types

const rect: GeomentryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
};

// Merging NameSpace
