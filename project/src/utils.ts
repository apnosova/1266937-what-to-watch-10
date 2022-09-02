import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { RatingLevel, MovieScore, MINS_IN_HOUR } from './constants';

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

export const getRatingLevel = (score: number) => {
  switch (true) {
    case score < MovieScore.Normal:
      return RatingLevel.Bad;
    case score < MovieScore.Good:
      return RatingLevel.Normal;
    case score < MovieScore.VeryGood:
      return RatingLevel.Good;
    case score < MovieScore.Awesome:
      return RatingLevel.VeryGood;
    default:
      return RatingLevel.Awesome;
  }
};

export const getFormattedDate = (initialDate: string) => dayjs(initialDate).format('MMMM D, YYYY');

export const getFormattedTime = (timeLeft: number) => {
  dayjs.extend(duration);

  if (timeLeft < MINS_IN_HOUR) {
    return dayjs.duration(timeLeft, 'seconds').format('-mm:ss');
  }

  return dayjs.duration(timeLeft, 'seconds').format('-HH:mm:ss');
};
