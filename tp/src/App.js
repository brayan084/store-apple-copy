import React from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import ListadoDeProductos from './listadoDeProductos';
import Catalogo from './catalogo';


function App() {
  return (
    <div>
      <div><Catalogo /></div>
      <div><ListadoDeProductos /></div>
    </div>
  );
}

export default App;
