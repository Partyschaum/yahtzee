export default function (cast: Array<number>): number {
  const sumFours = (acc: number, val: number): number => {
    if (val === 4) {
      return acc + 4;
    }
    return acc;
  };
  return cast.reduce(sumFours, 0);
}
