import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/Login';
import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// start the vconsole
startVConsole();
