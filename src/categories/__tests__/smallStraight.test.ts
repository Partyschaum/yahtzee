import smallStraight from '../smallStraight';

describe('Small Straight', () => {
  describe('was cast', () => {
    it('returns 30', () => {
      const cast = [1, 2, 3, 4, 1];
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
