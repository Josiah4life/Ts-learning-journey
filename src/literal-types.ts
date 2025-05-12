export type directionProps = "up" | "down" | "left" | "right";

function move(direction: directionProps, distance: number) {
  // Move the specified distance in the given direction
}

move("up", 10);

move("left", 5);

//@ts-expect-error - "up-right" is not a valid direction
move("up-right", 10);

//@ts-expect-error - "up-right" is not a valid direction
move("down-left", 20);

//@ts-expect-error - "up-right" is not a valid direction
move("up-left", 30);
