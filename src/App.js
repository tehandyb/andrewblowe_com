import React, { Component } from 'react';
import AboutMeSnippet from './components/AboutMeSnippet.js';
import OverviewPanel from './components/OverviewPanel.js'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      enteredSite: false
    }
    this.enterSite = this.enterSite.bind(this)
  }
  
  enterSite() {
    this.setState({ enteredSite: true })
  }
  
  render() {
    let mainSection = <AboutMeSnippet onEnter={this.enterSite} />
    if(this.state.enteredSite) {
      mainSection = <OverviewPanel />
    }
    return (
      <div className="App">
        {mainSection}
      </div>
    );
  }
}

export default App;
