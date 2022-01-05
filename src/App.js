import './App.css';
import Dashboard from './Dashboard';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
