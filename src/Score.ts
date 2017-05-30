import { CATEGORY } from './categories';

export default class Score {
  public constructor(public readonly category: CATEGORY, public readonly points: number) { }
}
