import { ratingLevel, movieScore } from './constants';

export const getEqualCols = <T>(array: T[], colCount: number, res: T[][]) => {
  const itemsPerCol = Math.ceil(array.length / colCount);

  for (let item = 0; item < colCount; item++) {
    for (let i = 0; i < itemsPerCol; i++) {
      const value = array[i + item * itemsPerCol];
      if (!value) {
        continue;
      }
      (res[item]).push(value);
    }
  }

  return res;
};


export const formatDate = (initialDate: string) => {
  const date = new Date(initialDate);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);

  return `${month} ${day}, ${year}`;
};

export const getRatingLevel = (score: number) => {
  switch (true) {
    case score < movieScore.Normal:
      return ratingLevel[ratingLevel.Bad];
    case score < movieScore.Good:
      return ratingLevel[ratingLevel.Normal];
    case score < movieScore.VeryGood:
      return ratingLevel.Good;
    case score < movieScore.Awesome:
      return ratingLevel.VeryGood;
    default:
      return ratingLevel.Awesome;
  }
};
