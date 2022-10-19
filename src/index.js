import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context';

import './styles.css';

var mountNode = document.getElementById('app');
// ReactDOM.render(<App name="Jane" />, mountNode);
const root = ReactDOM.createRoot(mountNode);
root.render(
  <Context>
    <App />
  </Context>,
);
