import { CategoryValidator } from './categories';

export default class ScoreAnalyzer {
  public constructor(private validators: CategoryValidator[]) { }

  public scores() {
    this.validators.forEach((validator) => {
      validator([1, 2, 3, 4, 5]);
    });
  }
}
