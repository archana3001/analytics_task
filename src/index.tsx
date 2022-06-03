import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendering App in root element of index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


