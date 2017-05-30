import Score from '../../Score';
import { TWOS, twos } from '../index';

describe('Twos', () => {
  it('returns sum of dice with the number 2', () => {
    const cast = [1, 2, 1, 3, 2];
    expect(twos(cast)).toEqual(new Score(TWOS, 4));
  });

  it('returns null for no score', () => {
    const cast = [3, 1, 5, 3, 3];
    expect(twos(cast)).toEqual(null);
  });
});
