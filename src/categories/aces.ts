import Score from '../Score';
import { ACES } from './index';

export default function (cast: Array<number>): Score | null {
  const sumAces = (acc: number, val: number): number => {
    if (val === 1) {
      return acc + 1;
    }
    return acc;
  };

  const sum = cast.reduce(sumAces, 0);

  if (sum > 0) {
    return new Score(ACES, sum);
  }

  return null;
}
