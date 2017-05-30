import Score from '../Score';
import { THREE_OF_A_KIND } from './index';

export default function (cast: Array<number>): Score | null {
  const pipCounter: Array<number> = Array<number>(5).fill(0);

  cast.forEach((val: number): void => {
    pipCounter[val - 1] += 1;
  });

  let hasThreeOfAKind = false;
  pipCounter.forEach((val: number): void => {
    if (val === 3) {
      hasThreeOfAKind = true;
    }
  });

  if (!hasThreeOfAKind) {
    return null;
  }

  const sum = (acc: number, val: number): number => {
    return acc + val;
  };

  return new Score(THREE_OF_A_KIND, cast.reduce(sum, 0));
}
