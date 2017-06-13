import Score from '../Score';

export { default as aces } from './aces';
export { default as twos } from './twos';
export { default as threes } from './threes';
export { default as fours } from './fours';
export { default as fives } from './fives';
export { default as sixes } from './sixes';
export { default as threeOfAKind } from './threeOfAKind';
export { default as fourOfAKind } from './fourOfAKind';
export { default as fullHouse } from './fullHouse';
export { default as smallStraight } from './smallStraight';
export { default as largeStraight } from './largeStraight';
export { default as chance } from './chance';
export { default as yahtzee } from './yahtzee';

export const ACES = 'ACES';
export type ACES = 'ACES';

export const TWOS = 'TWOS';
export type TWOS = 'TWOS';

export const THREES = 'THREES';
export type THREES = 'THREES';

export const FOURS = 'FOURS';
export type FOURS = 'FOURS';

export const FIVES = 'FIVES';
export type FIVES = 'FIVES';

export const SIXES = 'SIXES';
export type SIXES = 'SIXES';

export const THREE_OF_A_KIND = 'THREE_OF_A_KIND';
export type THREE_OF_A_KIND = 'THREE_OF_A_KIND';

export const FOUR_OF_A_KIND = 'FOUR_OF_A_KIND';
export type FOUR_OF_A_KIND = 'FOUR_OF_A_KIND';

export const FULL_HOUSE = 'FULL_HOUSE';
export type FULL_HOUSE = 'FULL_HOUSE';

export const SMALL_STRAIGHT = 'SMALL_STRAIGHT';
export type SMALL_STRAIGHT = 'SMALL_STRAIGHT';

export const LARGE_STRAIGHT = 'LARGE_STRAIGHT';
export type LARGE_STRAIGHT = 'LARGE_STRAIGHT';

export const CHANCE = 'CHANCE';
export type CHANCE = 'CHANCE';

export const YAHTZEE = 'YAHTZEE';
export type YAHTZEE = 'YAHTZEE';

export type Category = ACES | TWOS | THREES | FOURS | FIVES | SIXES |
  THREE_OF_A_KIND | FOUR_OF_A_KIND | FULL_HOUSE | SMALL_STRAIGHT |
  LARGE_STRAIGHT | CHANCE | YAHTZEE;

export type CategoryValidator = (cast: Array<number>) => Score | null;
