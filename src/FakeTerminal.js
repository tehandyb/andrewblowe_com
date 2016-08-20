import React, { Component } from 'react'

export default class FakeTerminal extends Component {
  constructor(props) {
    super(props);
    this.addDoneCallBack = this.addDoneCallBack.bind(this);
    this.addLine = this.addLine.bind(this);
    
    this.state = { currentLines: [this.addDoneCallBack(props.children[0])] };
  }
  
  addDoneCallBack(childElement) {
    let key = (this.state) ? this.state.currentLines.length : 0;
    return React.cloneElement(childElement, { key: key, onDone: this.addLine });
  }
  
  addLine() {
    if(this.state.currentLines.length < this.props.children.length) {

      let childElement = this.addDoneCallBack(this.props.children[this.state.currentLines.length]);
      this.setState({ currentLines: this.state.currentLines.concat(childElement) });

      
    }
  }
  
  render() {
    return (
      <div className="fake-terminal">
        {this.state.currentLines}
      </div>
    )
  }
}

