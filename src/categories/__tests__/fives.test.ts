import Score from '../../Score';
import { FIVES, fives } from '../index';

describe('Fives', () => {
  it('returns sum of dice with the number 5', () => {
    const cast = [4, 5, 1, 5, 4];
    expect(fives(cast)).toEqual(new Score(FIVES, 10));
  });

  it('returns null for no score', () => {
    const cast = [1, 2, 6, 1, 6];
    expect(fives(cast)).toEqual(null);
  });
});
