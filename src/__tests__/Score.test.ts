import Score from '../Score';
import { ACES } from '../categories';

describe('Score', () => {
  it('has category and points', () => {
    const score = new Score(ACES, 4);
    expect(score.category).toBe(ACES);
    expect(score.points).toBe(4);
  });
});
