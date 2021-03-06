import React, {Component} from 'react'

class Square extends Component {

  constructor(props){
    super(props)
    this.state = {
      contains: props.player,
      image: props.player.image 

      }
    }
  }

    handleClick(){
      this.setState({contains: 'http://fbccov.org/wp-content/uploads/2015/04/pictureofaGoldChromecross2.gif'})
    }

  render(){
    console.log("player",this.props)
    if(!this.state.image){
      return null

    return(
      <div className = {this.props.classSet} onClick = {this.handleClick.bind(this)}>
     <img src={this.state.image}/>
     </div>
    )
  }
}

export default Square;