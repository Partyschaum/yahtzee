import { yahtzee } from '../index';

describe('Yahtzee', () => {
  describe('was cast', () => {
    it('returns 50', () => {
      const cast = [4, 4, 4, 4, 4];
      expect(yahtzee(cast)).toBe(50);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(yahtzee(cast)).toBe(0);
    });
  });
});
