import Score from './Score';
import { ACES, TWOS, THREES, FOURS, FIVES, SIXES, Category } from './categories';

export default class Scorecard {
  public static MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS = 63;
  public static UPPER_SECTION_BONUS = 35;
  public static CATEGORIES = 13;

  private _categories: Array<Score> = [];

  public add(newScore: Score) {
    if (this._categories.length === Scorecard.CATEGORIES) {
      throw new FullScorecardError();
    }
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

  get bonus(): boolean {
    let points = 0;

    this._categories.filter((score) => {
      return score.category === ACES || score.category === TWOS || score.category === THREES
        || score.category === FOURS || score.category === FIVES || score.category === SIXES;
    }).forEach((score) => {
      points += score.points;
    });

    return points >= Scorecard.MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS;
  }

  get score(): number {
    let points = 0;

    this._categories.forEach((score) => {
      points += score.points;
    });

    return (this.bonus) ? points + Scorecard.UPPER_SECTION_BONUS : points;
  }
}

export class CategoryAlreadyUsedError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, CategoryAlreadyUsedError.prototype);
  }
}

export class FullScorecardError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, FullScorecardError.prototype);
  }
}
