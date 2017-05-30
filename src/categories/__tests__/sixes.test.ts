import Score from '../../Score';
import { SIXES, sixes } from '../index';

describe('Sixes', () => {
  it('returns sum of dice with the number 6', () => {
    const cast = [6, 5, 1, 6, 4];
    expect(sixes(cast)).toEqual(new Score(SIXES, 12));
  });

  it('returns null for no score', () => {
    const cast = [1, 2, 2, 1, 1];
    expect(sixes(cast)).toEqual(null);
  });
});
