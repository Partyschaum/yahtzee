import fours from '../fours';

describe('Fours', () => {
  it('returns sum of dice with the number 4', () => {
    const cast = [4, 3, 1, 3, 4];
    expect(fours(cast)).toBe(8);
  });
});
