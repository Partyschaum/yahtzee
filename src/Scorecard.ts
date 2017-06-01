import Score, { CategoryAlreadyUsedError } from './Score';
import { Category } from './categories';

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

  public cross(category: Category) {
    this.add(new Score(category, 0));
  }

  get categories(): Array<Score> {
    return this._categories;
  }
}
