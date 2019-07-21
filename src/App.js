import React from 'react';
import './App.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Landing from './components/Landing';
import ScatterPlots from './containers/ScatterPlots';
import DonutCharts from './containers/DonutCharts';
import BarCharts from './containers/BarCharts';
import Logo from './components/Logo';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"><Logo /></Link>
        <NavBar>
          <Link to="/scatter">Scatter Plots</Link>
          <Link to="/donut">Pie Charts</Link>
          <Link to="/bar">Bar Charts</Link>
        </NavBar>
        <Route exact path="/" component={Landing} />
        <Route path="/bar" component={BarCharts} />
        <Route path="/scatter" component={ScatterPlots} />
        <Route path="/donut" component={DonutCharts} />
      </Router>
    </div>
  );
}

export default App;
