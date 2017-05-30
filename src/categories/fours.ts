import Score from '../Score';
import { FOURS } from './index';

export default function (cast: Array<number>): Score | null {
  const sumFours = (acc: number, val: number): number => {
    if (val === 4) {
      return acc + 4;
    }
    return acc;
  };

  const sum = cast.reduce(sumFours, 0);

  if (sum > 0) {
    return new Score(FOURS, sum);
  }

  return null;
}
