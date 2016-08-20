import React, { Component } from 'react'

export default class TerminalLine extends Component {
  constructor(props) {
    super(props);
    this.state = { letterIndex: 0, currentText:  ""}  
    this.updateText = this.updateText.bind(this);
    this.isDone = this.isDone.bind(this);
  }
  
  componentDidMount() {
    this.updateText();
  }
  
  componentDidUpdate() {
    this.updateText();
    this.isDone();
  }
  
  updateText() {
    if(this.state.letterIndex < this.props.children.length) {
      setTimeout(() => {
        this.setState({ letterIndex: this.state.letterIndex + 1, currentText: this.props.children.substr(0, this.state.letterIndex + 1) });
      }, 100)
      
    }
  }
  
  isDone() {
    if(this.state.letterIndex === this.props.children.length) {
      this.props.onDone();
    }
  }
  
  render() {
    
    return (
        <div className="terminal-line">
          {this.state.currentText}
        </div>
    );
  }
}

TerminalLine.propTypes = {
  letterDelayTime: React.PropTypes.number,
  onDone: React.PropTypes.func
}

TerminalLine.defaultProps = {
  letterDelayTime: .5
}