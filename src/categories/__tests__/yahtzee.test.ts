import Score from '../../Score';
import { YAHTZEE, yahtzee } from '../index';

describe('Yahtzee', () => {
  describe('was cast', () => {
    it('returns 50', () => {
      const cast = [4, 4, 4, 4, 4];
      expect(yahtzee(cast)).toEqual(new Score(YAHTZEE, 50));
    });
  });

  describe('was not cast', () => {
    it('returns null', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(yahtzee(cast)).toBe(null);
    });
  });
});
