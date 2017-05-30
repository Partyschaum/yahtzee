import Score from '../Score';
import { FULL_HOUSE } from './index';

export default function (cast: Array<number>): Score | null {
  const pipCounter: Array<number> = Array<number>(5).fill(0);

  cast.forEach((val: number): void => {
    pipCounter[val - 1] += 1;
  });

  let hasTwoOfAKind = false;
  let hasThreeOfAKind = false;
  pipCounter.forEach((val: number): void => {
    if (val === 2) {
      hasTwoOfAKind = true;
    }
    if (val === 3) {
      hasThreeOfAKind = true;
    }
  });

  if (hasTwoOfAKind && hasThreeOfAKind) {
    return new Score(FULL_HOUSE, 25);
  }

  return null;
}
