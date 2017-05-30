import Score from '../../Score';
import { FULL_HOUSE, fullHouse } from '../index';

describe('Full House', () => {
  describe('was cast', () => {
    it('returns 25', () => {
      const cast = [1, 1, 3, 3, 3];
      expect(fullHouse(cast)).toEqual(new Score(FULL_HOUSE, 25));
    });
  });

  describe('was not cast', () => {
    it('returns null', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(fullHouse(cast)).toBe(null);
    });
  });
});
