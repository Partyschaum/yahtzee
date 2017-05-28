import fourOfAKind from '../fourOfAKind';

describe('Four Of A Kind', () => {
  describe('was cast', () => {
    it('returns sum of all dice', () => {
      const cast = [1, 3, 3, 3, 3];
      expect(fourOfAKind(cast)).toBe(13);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 3, 3, 3];
      expect(fourOfAKind(cast)).toBe(0);
    });
  });
});
