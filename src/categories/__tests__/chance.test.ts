import chance from '../chance';

describe('Chance', () => {
  it('returns sum of all dice', () => {
    const cast = [1, 2, 1, 3, 1];
    expect(chance(cast)).toBe(8);
  });
});
