import Score from '../../Score';
import { THREE_OF_A_KIND, threeOfAKind } from '../index';

describe('Three Of A Kind', () => {
  describe('was cast', () => {
    it('returns sum of all dice', () => {
      const cast = [1, 2, 3, 3, 3];
      expect(threeOfAKind(cast)).toEqual(new Score(THREE_OF_A_KIND, 12));
    });
  });

  describe('was not cast', () => {
    it('returns null', () => {
      const cast = [1, 2, 2, 3, 3];
      expect(threeOfAKind(cast)).toBe(null);
    });
  });
});
