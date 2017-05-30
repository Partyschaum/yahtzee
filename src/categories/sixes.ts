import Score from '../Score';
import { SIXES } from './index';

export default function (cast: Array<number>): Score | null {
  const sumSixes = (acc: number, val: number): number => {
    if (val === 6) {
      return acc + 6;
    }
    return acc;
  };

  const sum = cast.reduce(sumSixes, 0);

  if (sum > 0) {
    return new Score(SIXES, sum);
  }

  return null;
}
