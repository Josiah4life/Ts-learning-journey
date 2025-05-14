import type { Expect, Equal } from "@total-typescript/helpers";

type Event = "click" | "hover" | "scroll";

type CallbackType = (
  event: Event,
  x: number,
  y: number,
  screenId: number
) => void;

const listenToEvent = (callback: CallbackType) => {};

const Houses = (callback: CallbackType) => {
  console.log(callback);
};

Houses(() => {
  console.log();
});

listenToEvent(() => {});

listenToEvent((event) => {
  type tests = [Expect<Equal<typeof event, Event>>];
});

listenToEvent((event, x, y) => {
  type tests = [
    Expect<Equal<typeof event, Event>>,

    Expect<Equal<typeof x, number>>,

    Expect<Equal<typeof y, number>>
  ];
});

listenToEvent((event, x, y, screenId) => {
  // red squiggly line under event, x, y, and screenId
  type tests = [
    Expect<Equal<typeof event, Event>>,

    Expect<Equal<typeof x, number>>,

    Expect<Equal<typeof y, number>>,

    Expect<Equal<typeof screenId, number>>
  ];
});

// const handleClick = (event: Event) => {
//   console.log(event);
// };

// const listenToEvent1 = (cb: (event: Event) => void) {
//   cb("click")
// }

// listenToEvent1(handleClick)
