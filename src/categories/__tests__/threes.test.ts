import threes from '../threes';

describe('Threes', () => {
  it('returns sum of dice with the number 3', () => {
    const cast = [1, 3, 1, 3, 2];
    expect(threes(cast)).toBe(6);
  });
});
