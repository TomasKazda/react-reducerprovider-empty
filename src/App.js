import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Provider as MyProvider} from "./providers/Provider";
import List from './components/Simplelister'
import Buttons from './components/Simplesetter'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
    
    <MyProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/add" element={<Buttons />} />
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
            

    </div>
  );
}

export default App;
