import Score from '../../Score';
import { FOURS, fours } from '../index';

describe('Fours', () => {
  it('returns sum of dice with the number 4', () => {
    const cast = [4, 3, 1, 3, 4];
    expect(fours(cast)).toEqual(new Score(FOURS, 8));
  });

  it('returns null for no score', () => {
    const cast = [1, 2, 5, 1, 6];
    expect(fours(cast)).toEqual(null);
  });
});
