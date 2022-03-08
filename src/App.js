import React from 'react'
import './App.css';
import Header from './component/Header';
import Tweets from './component/Tweets';
import Bychara from './component/Bychara';
import Farday from './component/Farday';
import Notfound from './component/Notfound';

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
          <Route path="/farday" element={<Farday />} />
          <Route path="/bychara/:name" element={<Bychara />} />
          <Route path='/*' element={<Notfound />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
