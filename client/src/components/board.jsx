import React , {Component} from 'react';
import Square from './square.jsx'

class Board extends Component {

  constructor(props){
    super(props),
    this.state = {
      board: ["", "", "", "", "", ""]
    }
    this.board = Array(9).fill(null);
  }


  render(){

    const squareCreation = this.board.map((square, index) =>{
      return(
          <Square key={index}/>
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