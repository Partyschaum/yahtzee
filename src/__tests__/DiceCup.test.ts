import DiceCup from '../DiceCup';

describe('DiceCup', () => {
  it('casts five numbers between 1 and 6', () => {
    const numberOfDice = 5;
    const cup = new DiceCup();
    const cast = cup.cast(numberOfDice);

    expect(cast).toHaveLength(numberOfDice);
    cast.forEach((pip) => {
      expect(pip).toBeGreaterThanOrEqual(1);
      expect(pip).toBeLessThanOrEqual(6);
    });
  });

  it('casts exactly as many dice as are in the cup', () => {
    const numberOfDice = 10;
    const cup = new DiceCup();
    expect(cup.cast(numberOfDice)).toHaveLength(numberOfDice);
  });
});
