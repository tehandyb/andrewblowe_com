import React, { Component } from 'react'
import Tidbit from './Tidbit'
import Terminal from './FakeTerminal'
import TerminalLine from './TerminalLine'

class AboutMeSnippet extends Component {
  render() {
    return (
      <div className="about-me-snippet">
        <Terminal>
          <TerminalLine>Hi interweb traveler!</TerminalLine>
          <TerminalLine>Explore to find out more</TerminalLine>
        </Terminal>
        <div className="tidbit-line">I like to <Tidbit /></div>
      </div>
    )
  }
}

export default AboutMeSnippet