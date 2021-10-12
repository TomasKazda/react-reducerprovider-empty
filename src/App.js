import React from 'react';
import './App.css';
import {Provider as MyProvider} from "./providers/Provider";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <h1>Something</h1>
        <p>else</p>
      </MyProvider>
    </div>
  );
}

export default App;
