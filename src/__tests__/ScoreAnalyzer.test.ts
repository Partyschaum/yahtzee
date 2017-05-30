import * as category from '../categories';
import Score from '../Score';
import ScoreAnalyzer from '../ScoreAnalyzer';

describe('ScoreAnalyzer', () => {
  describe('constructor', () => {
    it('uses given category validators', () => {
      const validatorOne = jest.fn();
      const validatorTwo = jest.fn();

      const analyzer = new ScoreAnalyzer([
        validatorOne,
        validatorTwo,
      ]);

      analyzer.scores([1, 2, 3, 4, 5, 6]);

      expect(validatorOne).toHaveBeenCalled();
      expect(validatorTwo).toHaveBeenCalled();
    });
  });

  describe('scores', () => {
    let analyzer: ScoreAnalyzer;

    beforeEach(() => {
      analyzer = new ScoreAnalyzer([
        category.aces, category.twos, category.threes, category.fours, category.fives, category.sixes,
        category.threeOfAKind, category.fourOfAKind, category.fullHouse,
        category.smallStraight, category.largeStraight,
        category.chance, category.yahtzee
      ]);
    });

    it('returns list of possible scores', () => {
      const scores = analyzer.scores([1, 1, 1, 2, 2]);
      expect(scores).toContainEqual(new Score(category.ACES, 3));
      expect(scores).toContainEqual(new Score(category.TWOS, 4));
      expect(scores).toContainEqual(new Score(category.THREE_OF_A_KIND, 7));
      expect(scores).toContainEqual(new Score(category.FULL_HOUSE, 25));
    });
  });
});
