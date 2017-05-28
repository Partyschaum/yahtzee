export default function (cast: Array<number>): number {
  const sumSixes = (acc: number, val: number): number => {
    if (val === 6) {
      return acc + 6;
    }
    return acc;
  };
  return cast.reduce(sumSixes, 0);
}
