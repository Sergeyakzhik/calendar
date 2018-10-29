import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Calendar</h1>
        </header>
        <main>
          <div className="main-table">
            <Table />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
