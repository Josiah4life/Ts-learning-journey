export type Mytype = string;

export interface Myinterface {
  myProp: string;
}

export function playTrack(track: {
  title: string;
  artist: string;
  duration: number;
}) {
  // red squiggly line under {
  console.log(`Playing: ${track.title}`);
}

// Hovering over the error shows:
// An implementation cannot be declared in ambient contexts.

// inside of global.d.ts

type Album = {
  title: string;
  artist: string;
  releaseDate: string;
};
