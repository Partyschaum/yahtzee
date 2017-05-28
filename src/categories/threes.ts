export default function (cast: Array<number>): number {
  const sumThrees = (acc: number, val: number): number => {
    if (val === 3) {
      return acc + 3;
    }
    return acc;
  };
  return cast.reduce(sumThrees, 0);
}
