import React , {Component} from 'react';
import Board from '../components/board.jsx'

class Game extends Component {

  constructor(props){
    super(props),
    this.state = {
      logic: props.logic
    }
  }

  render(){
    return(
      <Board logic={this.state.logic}/>
    )
  }
}

export default Game;