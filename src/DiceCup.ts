export default class DiceCup {
  public cast(numberOfDice: number): Array<number> {
    const pips: Array<number> = [];
    for (let i = 0; i < numberOfDice; i++) {
      pips.push(Math.floor(Math.random() * 6) + 1);
    }
    return pips;
  }
}
