import React from 'react'
import './App.css';
import Header from './component/Header';
import Tweets from './component/Tweets';
import Bychara from './component/Bychara';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/bychara" element={<Bychara />} />
            <Route path="/bychara/:id" element={<Bychara />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
