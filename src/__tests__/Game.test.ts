import Game from '../Game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  describe('game management', () => {
    it('adds players', () => {
      const player1 = game.player('Hauke');
      const player2 = game.player('Katharina');
      expect(game.players).toContain(player1);
      expect(game.players).toContain(player2);
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
        game.start();
        expect(game.running).toBe(true);
      });
    });
  });

  describe('game is running', () => {
    it('forbids adding new players', () => {
      game.player('Hauke');
      game.start();
      expect(() => game.player('Karl')).toThrowError(Game.GameAlreadyRunningError);
    });

    it('forbids starting game', () => {
      game.player('Hauke');
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
  });
});
