import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MyComponent } from 'devto-react';

/* Core CSS required for Ionic components to work properly */
import 'devto-react/css/core.css';

/* Basic CSS for apps built with Ionic */
import 'devto-react/css/normalize.css';
import 'devto-react/css/structure.css';
import 'devto-react/css/typography.css';

/* Optional CSS utils that can be commented out */
import 'devto-react/css/padding.css';
import 'devto-react/css/text-alignment.css';
import 'devto-react/css/text-transformation.css';
import 'devto-react/css/flex-utils.css';
import 'devto-react/css/display.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent first="Franco" middle="Xavier" last="Valdes" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
