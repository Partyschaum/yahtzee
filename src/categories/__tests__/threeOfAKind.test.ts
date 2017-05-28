import threeOfAKind from '../threeOfAKind';

describe('Three Of A Kind', () => {
  describe('was cast', () => {
    it('returns sum of all dice', () => {
      const cast = [1, 2, 3, 3, 3];
      expect(threeOfAKind(cast)).toBe(12);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(threeOfAKind(cast)).toBe(0);
    });
  });
});
