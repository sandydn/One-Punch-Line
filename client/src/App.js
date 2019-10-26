import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";
import Index from './routes/Index'
function App() {
  return (
    <Index>
      <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fight">Fight</Link>
              </li>
            </ul>
          </nav>
      </div>
    </Index>
  );
}

export default App;
