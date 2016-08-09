import React, { Component } from 'react'
import Tidbit from './Tidbit.js'

class AboutMeSnippet extends Component {
  render() {
    return (
      <div className="about-me-snippet">
        Hi interweb traveler! I'm Andrew Blowe.<br/>
        To start, here's a little tidbit about me: <br/>
        <div className="tidbit-line">I like to <Tidbit /></div>
      </div>
    )
  }
}

export default AboutMeSnippet