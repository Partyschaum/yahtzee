import { largeStraight } from '../index';

describe('Large Straight', () => {
  describe('was cast', () => {
    it('returns 40', () => {
      let cast = [2, 3, 4, 5, 6];
      expect(largeStraight(cast)).toBe(40);

      cast = [1, 2, 3, 4, 5];
      expect(largeStraight(cast)).toBe(40);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(largeStraight(cast)).toBe(0);
    });
  });
});
