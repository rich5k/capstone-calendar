import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
