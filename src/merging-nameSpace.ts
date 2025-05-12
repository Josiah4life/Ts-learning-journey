namespace GeomentryUtils {
  export namespace Rectangle {
    export interface Rectangle {
      color: string;
    }

    export function calculateCircumference(radius: number) {
      // implementation
    }
  }
}

namespace GeomentryUtils {
  export namespace Rectangle {
    export interface Rectangle {
      width: number;
      height: number;
    }
  }
}

// @ts-expect-error color required.
const rect: GeomentryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
};

const rect2: GeomentryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
  color: "red",
};

// GeomentryUtils.Rectangle
