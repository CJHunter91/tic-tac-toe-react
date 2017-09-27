import React , {Component} from 'react';
import Square from './square.jsx'

class Board extends Component {

  constructor(props){
    super(props),
    this.state = {
      logic: props.logic,
      board: props.logic.gameBoard
    }
  }

  updateBoard(index, player){
    const updateBoard = this.state.board
    updateBoard[index] = player.name
    this.setState({board: updateBoard })
  }

  render(){
    console.log(this.state.board)
    const squareCreation = this.state.board.map((square, index) =>{
      return(
            <Square key={index} player={square} classSet = {index + ' square'} />
        )
    })

    return(
      <div className="board">
        {squareCreation}
      </div>
    )
  }

}
export default Board;