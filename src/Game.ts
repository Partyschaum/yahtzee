import Player from './Player';
import Score from './Score';
import { ACES, TWOS, THREES } from './categories';

class Game {
  private _players: Player[];
  private _running = false;
  private _currentPlayer: Player;

  public constructor() {
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

  public cast(): Game.Result {
    if (!this.running) {
      throw new Game.GameNotRunningError;
    }
    return {
      dice: [1, 2, 3],
      scores: [
        new Score(ACES, 1),
        new Score(TWOS, 2),
        new Score(THREES, 3),
      ]
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
