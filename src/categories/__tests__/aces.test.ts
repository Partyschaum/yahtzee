import { aces } from '../index';

describe('Aces', () => {
  it('returns sum of dice with the number 1', () => {
    const cast = [1, 2, 1, 3, 1];
    expect(aces(cast)).toBe(3);
  });
});
