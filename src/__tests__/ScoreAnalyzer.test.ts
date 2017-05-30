import ScoreAnalyzer from '../ScoreAnalyzer';

describe('ScoreAnalyzer', () => {
  describe('scores', () => {
    it('uses given category validators', () => {
      const validatorOne = jest.fn();
      const validatorTwo = jest.fn();

      const analyzer = new ScoreAnalyzer([
        validatorOne,
        validatorTwo,
      ]);

      analyzer.scores();

      expect(validatorOne).toHaveBeenCalled();
      expect(validatorTwo).toHaveBeenCalled();
    });
  });
});
