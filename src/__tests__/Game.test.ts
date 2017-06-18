import DiceCup from '../DiceCup';
import Game from '../Game';
import Score from '../Score';
import ScoreAnalyzer from '../ScoreAnalyzer';
import Scorecard from '../Scorecard';

import {
  aces, twos, threes, fours, fives, sixes,
  threeOfAKind, fourOfAKind, fullHouse,
  smallStraight, largeStraight, chance, yahtzee
} from '../categories';

import {
  ACES, TWOS, THREES, FOURS, FIVES, THREE_OF_A_KIND,
  SMALL_STRAIGHT, LARGE_STRAIGHT, CHANCE
} from '../categories';

describe('Game', () => {
  let diceCup: DiceCup;
  let game: Game;
  let returnedDice: number[];

  beforeEach(() => {
    const DiceCupMock = jest.fn<DiceCup>(() => ({
      cast: jest.fn<number[]>(() => returnedDice)
    }));

    diceCup = new DiceCupMock();

    const scoreanalyzer = new ScoreAnalyzer([
      aces, twos, threes, fours, fives, sixes,
      threeOfAKind, fourOfAKind, fullHouse,
      smallStraight, largeStraight, chance, yahtzee
    ]);

    game = new Game(diceCup, scoreanalyzer);
  });

  describe('game management', () => {
    it('adds players', () => {
      const player1 = game.player('Hauke');
      const player2 = game.player('Katharina');
      expect(game.players).toContain(player1);
      expect(game.players).toContain(player2);
    });

    it('forbids adding same player name twice', () => {
      game.player('Hauke');
      expect(() => game.player('Hauke')).toThrowError(Game.PlayerNameAlreadyExistsError);
    });

    it('returns copy of player list', () => {
      game.player('Hauke');
      game.player('Katharina');
      expect(game.players.length).toBe(2);
      game.players.pop();
      expect(game.players.length).toBe(2);
    });

    describe('no players added', () => {
      it('throws errror', () => {
        expect(() => game.start()).toThrowError(Game.NoPlayersAdded);
      });
    });

    describe('players added', () => {
      it('starts the game', () => {
        game.player('Hauke');
        game.player('Klaus');
        game.start();
        expect(game.running).toBe(true);
      });
    });

    describe('start the game', () => {
      it('needs at least two players', () => {
        game.player('Otto');
        expect(() => game.start()).toThrowError(Game.MinimumPlayerRequirementsError);
      });
    });
  });

  describe('game is running', () => {
    it('forbids adding new players', () => {
      game.player('Hauke');
      game.player('Klaas');
      game.start();
      expect(() => game.player('Karl')).toThrowError(Game.GameAlreadyRunningError);
    });

    it('forbids starting game', () => {
      game.player('Hauke');
      game.player('Philip');
      game.start();
      expect(() => game.start()).toThrowError(Game.GameAlreadyRunningError);
    });

    it('starts with first player', () => {
      const player1 = game.player('Hauke');
      const player2 = game.player('Katharina');

      game.start();

      expect(game.currentPlayer).toBe(player1);
      expect(game.currentPlayer).not.toBe(player2);
    });

    describe('player casts dice', () => {
      it('forbids to cast the dice before game has started', () => {
        game.player('Karsten');
        expect(() => game.cast()).toThrowError(Game.GameNotRunningError);
      });

      it('casts the dice with 5 by default', () => {
        game.player('Karsten');
        game.player('Sven');
        game.start();
        returnedDice = [1, 2, 3, 4, 5];
        game.cast();
        expect(diceCup.cast).toHaveBeenCalledWith(5);
      });

      it('it returns possible scores', () => {
        game.player('Karsten');
        game.player('Ole');
        game.start();

        returnedDice = [1, 2, 3, 4, 5];

        expect(game.cast()).toEqual({
          dice: [1, 2, 3, 4, 5],
          scores: [
            new Score(ACES, 1),
            new Score(TWOS, 2),
            new Score(THREES, 3),
            new Score(FOURS, 4),
            new Score(FIVES, 5),
            new Score(SMALL_STRAIGHT, 30),
            new Score(LARGE_STRAIGHT, 40),
            new Score(CHANCE, 15),
          ]
        });
      });
    });

    describe('player casts selected dice again', () => {
      it('returns possible scores', () => {
        game.player('Lydia');
        game.player('Karsten');
        game.start();

        returnedDice = [1, 2, 3, 4, 5];
        game.cast();
        expect(diceCup.cast).toHaveBeenCalledWith(5);

        returnedDice = [1, 2, 3, 2, 2];
        expect(game.cast([4, 5])).toEqual({
          dice: [1, 2, 3, 2, 2],
          scores: [
            new Score(ACES, 1),
            new Score(TWOS, 6),
            new Score(THREES, 3),
            new Score(THREE_OF_A_KIND, 10),
            new Score(CHANCE, 10),
          ]
        });
        expect(diceCup.cast).toHaveBeenLastCalledWith(2);
      });
    });

    describe('player casts dice more than three times', () => {
      it('throws error', () => {
        game.player('Horst');
        game.player('Karsten');
        game.start();
        game.cast();
        game.cast();
        game.cast();
        expect(() => game.cast()).toThrowError(Game.DiceCastingExceededError);
      });
    });

    describe('player selects score', () => {
      it('add score to scorecard', () => {
        game.player('Horst');
        game.player('Harald');
        game.start();

        returnedDice = [1, 2, 3, 2, 2];
        const result = game.cast();

        // {
        //   dice: [1, 2, 3, 2, 2],
        //   scores: [
        //     new Score(ACES, 1),
        //     new Score(TWOS, 6),
        //     new Score(THREES, 3),
        //     new Score(THREE_OF_A_KIND, 10),
        //     new Score(CHANCE, 10),
        //   ]
        // }

        game.score(result.scores[1]);
        expect(game.scores).toBe(6);
      });

      it('forbids to add score used category', () => {
        game.player('Horst');
        game.player('Harald');
        game.start();

        returnedDice = [1, 2, 3, 2, 2];
        const result = game.cast();

        game.score(result.scores[1]);

        expect(() => game.score(result.scores[1])).toThrow(Scorecard.CategoryAlreadyUsedError);
      });

      it('changes to next player', () => {
        const player1 = game.player('Horst');
        const player2 = game.player('Harald');
        game.start();

        expect(game.currentPlayer).toBe(player1);

        returnedDice = [1, 2, 3, 2, 2];
        game.score(game.cast().scores[1]);

        expect(game.currentPlayer).toBe(player2);
      });
    });
  });
});
