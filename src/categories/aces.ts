export default function (cast: Array<number>): number {
  const sumAces = (acc: number, val: number): number => {
    if (val === 1) {
      return acc + 1;
    }
    return acc;
  };
  return cast.reduce(sumAces, 0);
}
