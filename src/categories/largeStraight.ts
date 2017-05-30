import Score from '../Score';
import { LARGE_STRAIGHT } from './index';

export default function (cast: Array<number>): Score | null {
  let ace = cast.includes(1);
  let two = cast.includes(2);
  let three = cast.includes(3);
  let four = cast.includes(4);
  let five = cast.includes(5);
  let six = cast.includes(6);

  if ((ace && two && three && four && five) || (two && three && four && five && six)) {
    return new Score(LARGE_STRAIGHT, 40);
  }

  return null;
}
