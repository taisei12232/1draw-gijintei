import React from 'react'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import OneDraw from './component/OneDraw';
import AllCharacters from './component/AllCharacters';
import Bychara from './component/Bychara';
import Farday from './component/Farday';
import Notfound from './component/Notfound';
import Top from './component/Top';
import AllCharactersTest from './component/AllCharacterTest';
import Anniversary from './component/Anniversary';
import Adminzakura from './component/Adminzakura';
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
        <Anniversary />
        <Routes>
          <Route path="/" element={<Adminzakura />} />
          <Route path="/1draw" element={<OneDraw />} />
          <Route path="/farday" element={<Farday />} />
          <Route path="/bychara" element={<AllCharacters />} />
          <Route path="/allchara" element={<AllCharactersTest />} />
          <Route path="/bychara/:name" element={<Bychara />} />
          <Route path='/adminzakura' element={<Adminzakura />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
