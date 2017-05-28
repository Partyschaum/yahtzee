import DiceCup from '../DiceCup';

describe('DiceCup', () => {
  it('casts five numbers between 1 and 6', () => {
    const cup = new DiceCup();
    cup.cast().forEach((pip) => {
      expect(pip).toBeGreaterThanOrEqual(1);
      expect(pip).toBeLessThanOrEqual(6);
    });
  });
});
