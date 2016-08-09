import React, { Component } from 'react'

class Tidbit extends Component {
  
  constructor(props) {
    super(props);
    this.state = { tidbitIndex: 0 };
  }
  
  tidbits() {
    return ["create things", "design", "play guitar", "listen to electronic music", "play tennis", "work with people", "take photos"];
  }
  
  changeTidbit() {
      let tidbitLength = this.tidbits().length
      let nextIndex = this.state.tidbitIndex + 1
      if(nextIndex < tidbitLength )
        this.setState({ tidbitIndex: nextIndex });
      else
        this.setState({ tidbitIndex: 0 });
  }
  
  render() {
    return (
      <span className="tidbit" onClick={this.changeTidbit.bind(this)}>
        { this.tidbits()[this.state.tidbitIndex] }
      </span>
    );
  }
  
}

export default Tidbit