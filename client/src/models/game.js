
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

    this.currentPlayer = 'player1'
  }

  setSquare(player,index){
    this.gameBoard[index] = player.name
  }

  getSquare(index){
    return this.gameBoard[index];
  }

  swapPlayer(){
    if(this.currentPlayer === this.player1.name){
      this.currentPlayer = this.player2.name
    }
    else { this.currentPlayer = player1.name}
  }


}

module.exports = GameLogic;