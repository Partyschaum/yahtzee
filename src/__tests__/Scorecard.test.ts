import Scorecard from '../Scorecard';
import Score, { CategoryAlreadyUsedError } from '../Score';
import { THREE_OF_A_KIND } from '../categories';

describe('Scorecard', () => {
  describe('add score', () => {
    it('registers score in corresponding category', () => {
      const scorecard = new Scorecard();
      const score = new Score(THREE_OF_A_KIND, 10);
      scorecard.add(score);
      expect(scorecard.categories).toContain(score);
    });

    it('throws error for already used category', () => {
      const scorecard = new Scorecard();
      const score = new Score(THREE_OF_A_KIND, 10);
      scorecard.add(score);
      expect(() => scorecard.add(score)).toThrowError(CategoryAlreadyUsedError);

    });
  });

  describe('cross out score', () => {
    it('crosses out a category', () => {
      const scorecard = new Scorecard();
      scorecard.cross(THREE_OF_A_KIND);
      expect(scorecard.categories[0].points).toBe(0);
    });
  });
});
