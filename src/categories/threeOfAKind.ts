export default function (cast: Array<number>): number {
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
    return 0;
  }

  const sum = (acc: number, val: number): number => {
    return acc + val;
  };

  return cast.reduce(sum, 0);
}
