import { smallStraight } from '../index';

describe('Small Straight', () => {
  describe('was cast', () => {
    it('returns 30', () => {
      let cast = [1, 2, 3, 4, 1];
      expect(smallStraight(cast)).toBe(30);

      cast = [2, 3, 4, 5, 2];
      expect(smallStraight(cast)).toBe(30);

      cast = [3, 4, 5, 6, 3];
      expect(smallStraight(cast)).toBe(30);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(smallStraight(cast)).toBe(0);
    });
  });
});
