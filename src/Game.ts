import DiceCup from './DiceCup';
import Player from './Player';
import Score from './Score';
import ScoreAnalyzer from './ScoreAnalyzer';

class Game {
  private _players: Player[];
  private _running = false;
  private _currentPlayer: Player;

  public constructor(private diceCup: DiceCup, private scoreAnalyzer: ScoreAnalyzer) {
    this._players = [];
  }

  public player(name: string) {
    if (this.running) {
      throw new Game.GameAlreadyRunningError;
    }
    const player = new Player(name, 123);
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

    this._currentPlayer = this.players.shift() as Player;
    this._running = true;

  }

  public cast(dice: number[] = []): Game.Result {
    if (!this.running) {
      throw new Game.GameNotRunningError;
    }

    let numberOfDice = dice.length;
    if (numberOfDice === 0) {
      numberOfDice = 5;
    }

    const diceCast = this.diceCup.cast(numberOfDice);
    const scores = this.scoreAnalyzer.scores(diceCast);

    return {
      dice: diceCast,
      scores: scores,
    };
  }

  public get players(): Player[] {
    return [...this._players];
  }

  public get running(): boolean {
    return this._running;
  }

  public get currentPlayer(): Player {
    return this._currentPlayer;
  }
}

namespace Game {

  export type Result = {
    dice: number[],
    scores: Score[]
  };

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

  export class NoPlayersAdded extends Error {
    constructor() {
      super();
      Object.setPrototypeOf(this, NoPlayersAdded.prototype);
    }
  }

}

export default Game;
