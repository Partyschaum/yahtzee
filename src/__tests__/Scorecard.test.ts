import Scorecard, { CategoryAlreadyUsedError, FullScorecardError } from '../Scorecard';
import Score from '../Score';
import {
  ACES, TWOS, THREES, FOURS, FIVES, SIXES,
  THREE_OF_A_KIND, FOUR_OF_A_KIND, FULL_HOUSE,
  SMALL_STRAIGHT, LARGE_STRAIGHT, CHANCE, YAHTZEE
} from '../categories';

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

    it('throws error if all categories are used', () => {
      scorecard.add(new Score(ACES, 3));
      scorecard.add(new Score(TWOS, 6));
      scorecard.add(new Score(THREES, 9));
      scorecard.add(new Score(FOURS, 12));
      scorecard.add(new Score(FIVES, 15));
      scorecard.add(new Score(SIXES, 18));
      scorecard.add(new Score(THREE_OF_A_KIND, 18));
      scorecard.add(new Score(FOUR_OF_A_KIND, 18));
      scorecard.add(new Score(FULL_HOUSE, 18));
      scorecard.add(new Score(SMALL_STRAIGHT, 18));
      scorecard.add(new Score(LARGE_STRAIGHT, 18));
      scorecard.add(new Score(YAHTZEE, 18));
      scorecard.add(new Score(CHANCE, 18));

      expect(() => scorecard.add(new Score(ACES, 3))).toThrowError(FullScorecardError);
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

  describe('score', () => {
    it('returns sum of all points', () => {
      scorecard.add(new Score(ACES, 3));
      scorecard.add(new Score(TWOS, 6));
      scorecard.add(new Score(THREES, 9));
      scorecard.add(new Score(FOURS, 12));
      expect(scorecard.score).toBe(30);
    });

    it('adds bonus for uppser section', () => {
      scorecard.add(new Score(ACES, 3));
      scorecard.add(new Score(TWOS, 6));
      scorecard.add(new Score(THREES, 9));
      scorecard.add(new Score(FOURS, 12));
      scorecard.add(new Score(FIVES, 15));
      scorecard.add(new Score(SIXES, 18));
      expect(scorecard.score).toBe(Scorecard.MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS
        + Scorecard.UPPER_SECTION_BONUS);
    });
  });
});
