import Score, { CategoryAlreadyUsedError } from './Score';

export default class Scorecard {
  private _categories: Array<Score> = [];

  public add(newScore: Score) {
    this._categories.forEach((score) => {
      if (score.category === newScore.category) {
        throw new CategoryAlreadyUsedError();
      }
    });

    this._categories.push(newScore);
  }

  get categories(): Array<Score> {
    return this._categories;
  }
}
