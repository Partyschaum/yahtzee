import Score from '../Score';
import { CHANCE } from './index';

export default function (cast: Array<number>): Score {
  const sumAces = (acc: number, val: number): number => {
    return acc + val;
  };
  return new Score(CHANCE, cast.reduce(sumAces, 0));
}
