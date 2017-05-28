import DiceCup from '../DiceCup';

describe('DiceCup', () => {
  it('casts five numbers between 1 and 6', () => {
    const numberOfDices = 5;
    const cup = new DiceCup(numberOfDices);
    const cast = cup.cast();

    expect(cast).toHaveLength(numberOfDices);
    cast.forEach((pip) => {
      expect(pip).toBeGreaterThanOrEqual(1);
      expect(pip).toBeLessThanOrEqual(6);
    });
  });

  it('casts exactly as many dices as are in the cup', () => {
    const numberOfDices = 10;
    const cup = new DiceCup(numberOfDices);
    expect(cup.cast()).toHaveLength(numberOfDices);
  });
});
