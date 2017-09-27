
class GameLogic{

  constructor(){
    this.gameBoard = Array(9).fill(null);
    this.player1 = {
      name: 'player1',
      image: 'http://studymaths.co.uk/games/nought.png'
    }

    this.player2 ={
      name: 'player2',
      image: 'http://studymaths.co.uk/games/cross.png'
    }
  }

  setSquare(player,index){
    this.gameBoard[index] = player.name
  }



}

module.exports = GameLogic;