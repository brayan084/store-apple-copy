import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';   // Tema lara dark indigo
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

