export default function (cast: Array<number>): number {
  const sumTwos = (acc: number, val: number): number => {
    if (val === 2) {
      return acc + 2;
    }
    return acc;
  };
  return cast.reduce(sumTwos, 0);
}
