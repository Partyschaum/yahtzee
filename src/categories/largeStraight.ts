export default function (cast: Array<number>): number {
  let ace = cast.includes(1);
  let two = cast.includes(2);
  let three = cast.includes(3);
  let four = cast.includes(4);
  let five = cast.includes(5);
  let six = cast.includes(6);

  if ((ace && two && three && four && five) || (two && three && four && five && six)) {
    return 40;
  }

  return 0;
}