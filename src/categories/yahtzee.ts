import Score from '../Score';
import { YAHTZEE } from './index';

export default function (cast: Array<number>): Score | null {
  const pipCounter: Array<number> = Array<number>(5).fill(0);

  cast.forEach((val: number): void => {
    pipCounter[val - 1] += 1;
  });

  let hasYahtzee = false;
  pipCounter.forEach((val: number): void => {
    if (val === 5) {
      hasYahtzee = true;
    }
  });

  if (hasYahtzee) {
    return new Score(YAHTZEE, 50);
  }

  return null;
}
