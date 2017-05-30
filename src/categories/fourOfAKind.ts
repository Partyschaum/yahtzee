import Score from '../Score';
import { FOUR_OF_A_KIND } from './index';

export default function (cast: Array<number>): Score | null {
  const pipCounter: Array<number> = Array<number>(5).fill(0);

  cast.forEach((val: number): void => {
    pipCounter[val - 1] += 1;
  });

  let hasFourOfAKind = false;
  pipCounter.forEach((val: number): void => {
    if (val === 4) {
      hasFourOfAKind = true;
    }
  });

  if (!hasFourOfAKind) {
    return null;
  }

  const sum = (acc: number, val: number): number => {
    return acc + val;
  };

  return new Score(FOUR_OF_A_KIND, cast.reduce(sum, 0));
}
