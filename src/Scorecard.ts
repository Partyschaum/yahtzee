import Score from './Score';
import { ACES, TWOS, THREES, FOURS, FIVES, SIXES, Category } from './categories';

export default class Scorecard {
  public static CATEGORIES = 13;
  public static MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS = 63;
  public static UPPER_SECTION = [ACES, TWOS, THREES, FOURS, FIVES, SIXES];
  public static UPPER_SECTION_BONUS = 35;

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

  private upperSection(): number {
    let points = 0;
    this._categories
      .filter((score) => Scorecard.UPPER_SECTION.includes(score.category))
      .forEach((score) => {
        points += score.points;
      });
    return points;
  }

  get categories(): Array<Score> {
    return this._categories;
  }

  get bonus(): boolean {
    return this.upperSection() >= Scorecard.MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS;
  }

  get score(): number {
    let points = 0;

    this._categories.forEach((score) => {
      points += score.points;
    });

    const applyBonus = this._categories.length === 13 && this.bonus;

    return (applyBonus) ? points + Scorecard.UPPER_SECTION_BONUS : points;
  }

  get pointsNeededForBonus(): number {
    return Scorecard.MIN_UPPER_SECTION_SCORE_NEEDED_FOR_BONUS - this.upperSection();
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
