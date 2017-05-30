import { fives } from '../index';

describe('Fives', () => {
  it('returns sum of dice with the number 5', () => {
    const cast = [4, 5, 1, 5, 4];
    expect(fives(cast)).toBe(10);
  });
});
