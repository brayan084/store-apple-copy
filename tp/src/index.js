import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
