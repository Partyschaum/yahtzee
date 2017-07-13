import Player from '../Player';

describe('Player', () => {
  it('has a name', () => {
    const player = new Player('Hauke', 123);
    expect(player.name).toEqual('Hauke');
  });

  it('has a id', () => {
    const player = new Player('Hauke', 123);
    expect(player.id).toEqual(123);
  });
});
