import Score from '../Score';
import { TWOS } from './index';

export default function (cast: Array<number>): Score | null {
  const sumTwos = (acc: number, val: number): number => {
    if (val === 2) {
      return acc + 2;
    }
    return acc;
  };

  const sum = cast.reduce(sumTwos, 0);

  if (sum > 0) {
    return new Score(TWOS, sum);
  }

  return null;
}
