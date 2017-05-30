import Score from '../../Score';
import { THREES, threes } from '../index';

describe('Threes', () => {
  it('returns sum of dice with the number 3', () => {
    const cast = [1, 3, 1, 3, 2];
    expect(threes(cast)).toEqual(new Score(THREES, 6));
  });

  it('returns null for no score', () => {
    const cast = [1, 2, 5, 4, 6];
    expect(threes(cast)).toEqual(null);
  });
});
