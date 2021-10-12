import React from 'react';
import './App.css';
import {Provider as MyProvider} from "./providers/Provider";
import List from './components/Simplelister'
import Buttons from './components/Simplesetter'

function App() {
  return (
    <div className="App">
      <MyProvider>
        <List />
        <Buttons />
      </MyProvider>
    </div>
  );
}

export default App;
