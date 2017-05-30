import Score from '../../Score';
import { FOUR_OF_A_KIND, fourOfAKind } from '../index';

describe('Four Of A Kind', () => {
  describe('was cast', () => {
    it('returns sum of all dice', () => {
      const cast = [1, 3, 3, 3, 3];
      expect(fourOfAKind(cast)).toEqual(new Score(FOUR_OF_A_KIND, 13));
    });
  });

  describe('was not cast', () => {
    it('returns null', () => {
      const cast = [1, 2, 3, 3, 3];
      expect(fourOfAKind(cast)).toBe(null);
    });
  });
});
