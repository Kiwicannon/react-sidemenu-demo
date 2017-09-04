import React, { Component } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    sidebarOpen: false
  }

  this.openSideNav = this.openSideNav.bind(this)
}

openSideNav(){
  if(!this.state.sidebarOpen) {
    this.setState({sidebarOpen: true});
  } else {
    this.setState({sidebarOpen: false});
  }
  // this.setState({sidebarOpen: !this.state.sidebarOpen});
}

  render() {
    return (
      <div className="App">
        <Header openNav={this.openSideNav} />
        <Sidenav isNavOpen={this.state.sidebarOpen} />

      </div>
    );
  }
}

export default App;
