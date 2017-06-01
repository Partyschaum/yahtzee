import Scorecard from '../Scorecard';
import Score, { CategoryAlreadyUsedError } from '../Score';
import { ACES, TWOS, THREES, FOURS, FIVES, SIXES, THREE_OF_A_KIND } from '../categories';

describe('Scorecard', () => {
  let scorecard: Scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('add score', () => {
    it('registers score in corresponding category', () => {
      const score = new Score(THREE_OF_A_KIND, 10);
      scorecard.add(score);
      expect(scorecard.categories).toContain(score);
    });

    it('throws error for already used category', () => {
      const score = new Score(THREE_OF_A_KIND, 10);
      scorecard.add(score);
      expect(() => scorecard.add(score)).toThrowError(CategoryAlreadyUsedError);

    });
  });

  describe('cross out score', () => {
    it('crosses out a category', () => {
      scorecard.cross(THREE_OF_A_KIND);
      expect(scorecard.categories[0].points).toBe(0);
    });
  });

  describe('bonus', () => {
    it('returns true if reached', () => {
      scorecard.add(new Score(ACES, 3));
      scorecard.add(new Score(TWOS, 6));
      scorecard.add(new Score(THREES, 9));
      scorecard.add(new Score(FOURS, 12));
      scorecard.add(new Score(FIVES, 15));
      scorecard.add(new Score(SIXES, 18));
      expect(scorecard.bonus).toBe(true);
    });

    it('returns false if not reached', () => {
      scorecard.add(new Score(ACES, 3));
      expect(scorecard.bonus).toBe(false);
    });
  });
});
