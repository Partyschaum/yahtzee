export default class DiceCup {
  private numberOfDices: number;

  public constructor(dices: number) {
    this.numberOfDices = dices;
  }

  public cast(): Array<number> {
    const pips: Array<number> = [];

    for (let i = 0; i < this.numberOfDices; i++) {
      pips.push(1);
    }
    return pips;
  }
}
