import Score from '../Score';
import { THREES } from './index';

export default function (cast: Array<number>): Score | null {
  const sumThrees = (acc: number, val: number): number => {
    if (val === 3) {
      return acc + 3;
    }
    return acc;
  };

  const sum = cast.reduce(sumThrees, 0);

  if (sum > 0) {
    return new Score(THREES, sum);
  }

  return null;
}
