import React, {Component} from 'react'

class Square extends Component {

  constructor(props){
    super(props)
    this.state = {
      contains: null
    }
  }

    handleClick(){
      this.setState({contains: 'http://fbccov.org/wp-content/uploads/2015/04/pictureofaGoldChromecross2.gif'})
    }

  render(){
    return(
      <div className = {this.props.classSet} onClick = {this.handleClick.bind(this)}>
     <img src={this.state.contains}/>
     </div>
    )
  }
}

export default Square;