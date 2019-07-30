import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router >
    <div className="App">
      <MainContainer />
    </div>
    </Router>
  );
}

export default App;
