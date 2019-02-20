import React, { Component } from 'react';
import './App.css';
import MasterLayout from './layouts/MasterLayout';
import IncomeStatement from './pages/income-statement';

class App extends Component {
  render() {
    return (
      <MasterLayout>
        <IncomeStatement />
      </MasterLayout>
    );
  }
}

export default App;
