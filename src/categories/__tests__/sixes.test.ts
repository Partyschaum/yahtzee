import sixes from '../sixes';

describe('Sixes', () => {
  it('returns sum of dice with the number 6', () => {
    const cast = [6, 5, 1, 6, 4];
    expect(sixes(cast)).toBe(12);
  });
});
