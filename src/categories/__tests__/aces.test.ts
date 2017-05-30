import Score from '../../Score';
import { ACES, aces } from '../index';

describe('Aces', () => {
  it('returns sum of dice with the number 1', () => {
    const cast = [1, 2, 1, 3, 1];
    expect(aces(cast)).toEqual(new Score(ACES, 3));
  });

  it('returns null for no score', () => {
    const cast = [3, 2, 5, 3, 3];
    expect(aces(cast)).toEqual(null);
  });
});
