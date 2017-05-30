import { CategoryValidator } from './categories';
import Score from './Score';

export default class ScoreAnalyzer {
  public constructor(private validators: CategoryValidator[]) { }

  public scores(cast: Array<number>): Score[] {
    return this.validators.map((validator) => {
      return validator(cast);
    }).filter((score) => {
      return score !== null;
    }) as Score[];
  }
}
