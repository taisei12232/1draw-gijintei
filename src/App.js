import React from 'react'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Tweets from './component/Tweets';
import AllCharacters from './component/AllCharacters';
import Bychara from './component/Bychara';
import Farday from './component/Farday';
import Notfound from './component/Notfound';
import Top from './component/Top';
import AllCharactersTest from './component/AllCharacterTest';

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
          <Route path="/" element={<Top />} />
          <Route path="/1draw" element={<Tweets />} />
          <Route path="/farday" element={<Farday />} />
          <Route path="/bychara" element={<AllCharacters />} />
          <Route path="/allchara" element={<AllCharactersTest />} />
          <Route path="/bychara/:name" element={<Bychara />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
