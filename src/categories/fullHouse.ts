export default function (cast: Array<number>): number {
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
    return 25;
  }

  return 0;
}
