export default function (cast: Array<number>): number {
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
    return 50;
  }

  return 0;
}
