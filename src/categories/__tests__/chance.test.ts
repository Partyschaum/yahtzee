import Score from '../../Score';
import { CHANCE, chance } from '../index';

describe('Chance', () => {
  it('returns sum of all dice', () => {
    const cast = [1, 2, 1, 3, 1];
    expect(chance(cast)).toEqual(new Score(CHANCE, 8));
  });
});
