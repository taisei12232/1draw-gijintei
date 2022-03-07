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
      <Router>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/1draw" element={<Tweets />} />
          <Route path="/bychara" element={<Bychara />} />
          <Route path="/bychara/:name" element={<Bychara />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
