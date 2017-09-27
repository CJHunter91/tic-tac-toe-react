var assert = require('assert');
var GameLogic = require ('../game');

describe('game Test', function(){

  beforeEach(function(){
    game = new GameLogic();
  })

  it('should have an initial board array', function(){
    assert.equal(9, game.gameBoard.length)
  })

  it('should change the array at the specific index',function(){
    game.setSquare(game.player1, 1)
    assert.equal('player1', game.gameBoard[1])
  })
})