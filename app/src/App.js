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
}

handleViewSidebar(){
  if(!this.state.sidebarOpen) {
    this.setState({sidebarOpen: true});
  } else {
    this.setState({sidebarOpen: false});
  }
}

  render() {
    return (
      <div className="App">
        <Header openNav={this.handleViewSidebar} />
        <Sidenav isOpen={this.state.sidebarOpen} />

      </div>
    );
  }
}

export default App;
