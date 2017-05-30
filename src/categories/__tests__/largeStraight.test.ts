import Score from '../../Score';
import { LARGE_STRAIGHT, largeStraight } from '../index';

describe('Large Straight', () => {
  describe('was cast', () => {
    it('returns 40', () => {
      let cast = [2, 3, 4, 5, 6];
      expect(largeStraight(cast)).toEqual(new Score(LARGE_STRAIGHT, 40));

      cast = [1, 2, 3, 4, 5];
      expect(largeStraight(cast)).toEqual(new Score(LARGE_STRAIGHT, 40));
    });
  });

  describe('was not cast', () => {
    it('returns null', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(largeStraight(cast)).toBe(null);
    });
  });
});
