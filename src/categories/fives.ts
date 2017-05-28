export default function (cast: Array<number>): number {
  const sumFives = (acc: number, val: number): number => {
    if (val === 5) {
      return acc + 5;
    }
    return acc;
  };
  return cast.reduce(sumFives, 0);
}
