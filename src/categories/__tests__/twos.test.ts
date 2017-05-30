import { twos } from '../index';

describe('Twos', () => {
  it('returns sum of dice with the number 2', () => {
    const cast = [1, 2, 1, 3, 2];
    expect(twos(cast)).toBe(4);
  });
});
