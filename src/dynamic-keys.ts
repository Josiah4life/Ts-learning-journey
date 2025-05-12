type Scores = {
  [subject: string]: number;
};

//There can be one index signature per object type.

interface Scores1 {
  [subject: string]: number;
}

const scores1: {
  [key: string]: number;
} = {};

const scores3: Record<string, number> = {};

const scores: Scores = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

interface RequiredScores {
  math: number;
  english: number;
  science: number;
}

interface Scores3 extends RequiredScores {
  [subject: string]: number;
  math: 95;
  english: 90;
  science: number;
}

const scores4: Scores3 = {
  math: 95,
  english: 90,
};

scores3.athletics = 100;
scores3.french = 90;
scores3.spanish = 50;
