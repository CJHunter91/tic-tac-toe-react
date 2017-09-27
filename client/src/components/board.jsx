import React , {Component} from 'react';
import Square from './square.jsx'

class Board extends Component {

  constructor(props){
    super(props),
    this.state = {
      board: props.board
    }
  }


  render(){
    console.log(this.state.board)
    const squareCreation = this.state.board.map((square, index) =>{
      return(
            <Square key={index} classSet = {index + ' square'} />
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