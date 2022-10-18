import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

var mountNode = document.getElementById('app');
ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
