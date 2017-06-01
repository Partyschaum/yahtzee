import Score from './Score';

export default class Scorecard {
  private _categories: Array<Score> = [];

  public add(score: Score) {
    this._categories.push(score);
  }

  get categories(): Array<Score> {
    return this._categories;
  }
}
