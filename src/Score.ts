import { Category } from './categories';

export default class Score {
  public constructor(public readonly category: Category, public readonly points: number) { }
}

export class CategoryAlreadyUsedError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, CategoryAlreadyUsedError.prototype);
  }
}
