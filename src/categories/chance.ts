export default function (cast: Array<number>): number {
  const sumAces = (acc: number, val: number): number => {
    return acc + val;
  };
  return cast.reduce(sumAces, 0);
}
