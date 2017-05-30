import Score from '../Score';
import { FIVES } from './index';

export default function (cast: Array<number>): Score | null {
  const sumFives = (acc: number, val: number): number => {
    if (val === 5) {
      return acc + 5;
    }
    return acc;
  };

  const sum = cast.reduce(sumFives, 0);

  if (sum > 0) {
    return new Score(FIVES, sum);
  }

  return null;
}
