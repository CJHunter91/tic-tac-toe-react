import React , {Component} from 'react';
import Square from './square.jsx'

class Board extends Component {

  constructor(props){
    super(props),
    this.state = {
      size: 3
    }
    this.board = Array(9).fill(null);
  }


  render(){

    const squareCreation = this.board.map((square, index) =>{
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