import DiceCup from './DiceCup';
import Score from './Score';
import ScoreAnalyzer from './ScoreAnalyzer';
import Scorecard from './Scorecard';

class Game {
  private _players: Game.Players;
  private _running = false;
  private _currentPlayer: Game.Player;
  private numberOfCasts: number;
  private scorecard: Scorecard;
  private playerId: number;

  public constructor(private diceCup: DiceCup, private scoreAnalyzer: ScoreAnalyzer) {
    this._players = [];
    this.playerId = 1;
    this.scorecard = new Scorecard();
  }

  public player(name: string) {
    if (this.running) {
      throw new Game.GameAlreadyRunningError;
    }
    const player = { id: this.playerId, name };
    this.playerId++;
    this._players.push(player);
    return player;
  }

  public start() {
    if (this.running) {
      throw new Game.GameAlreadyRunningError;
    }
    if (this.players.length === 0) {
      throw new Game.NoPlayersAdded();
    }
    if (this.players.length < 2) {
      throw new Game.MinimumPlayerRequirementsError();
    }

    this._currentPlayer = this.players.shift() as Game.Player;
    this._running = true;
    this.numberOfCasts = 0;
  }

  public cast(dice: number[] = []): Game.Result {
    if (!this.running) {
      throw new Game.GameNotRunningError;
    }

    if (this.numberOfCasts === 3) {
      throw new Game.DiceCastingExceededError();
    }

    let numberOfDice = dice.length;
    if (numberOfDice === 0) {
      numberOfDice = 5;
    }

    const diceCast = this.diceCup.cast(numberOfDice);
    const scores = this.scoreAnalyzer.scores(diceCast);

    this.numberOfCasts++;

    return {
      dice: diceCast,
      scores: scores,
    };
  }

  public score(score: Score) {
    this.scorecard.add(score);
    const nextPlayer = this._players.filter((player) => {
      return player.id === (this.currentPlayer.id + 1);
    });
    this._currentPlayer = nextPlayer.pop() as Game.Player;
  }

  public get players(): Game.Player[] {
    return [...this._players];
  }

  public get running(): boolean {
    return this._running;
  }

  public get currentPlayer(): Game.Player {
    return this._currentPlayer;
  }

  public get scores(): number {
    return this.scorecard.score;
  }
}

namespace Game {

  export type Result = {
    dice: number[];
    scores: Score[];
  };

  export type Player = {
    id: number;
    name: string;
  };

  export type Players = Player[];

  export class GameAlreadyRunningError extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, GameAlreadyRunningError.prototype);
    }

  }

  export class GameNotRunningError extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, GameNotRunningError.prototype);
    }
  }

  export class DiceCastingExceededError extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, DiceCastingExceededError.prototype);
    }
  }

  export class NoPlayersAdded extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, NoPlayersAdded.prototype);
    }
  }

  export class MinimumPlayerRequirementsError extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, MinimumPlayerRequirementsError.prototype);
    }
  }

}

export default Game;
