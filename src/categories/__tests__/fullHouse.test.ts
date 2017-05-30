import { fullHouse } from '../index';

describe('Full House', () => {
  describe('was cast', () => {
    it('returns 25', () => {
      const cast = [1, 1, 3, 3, 3];
      expect(fullHouse(cast)).toBe(25);
    });
  });

  describe('was not cast', () => {
    it('returns 0', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(fullHouse(cast)).toBe(0);
    });
  });
});
