import React from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";


function App() {
  return (
    <div>
      <BasicDemo />
      <div><RowEditingDemo /></div>
      <div><BasicDemo1 /></div>
      {/* <div><ProductsDemo /></div> */}
    </div>
  );
}

export default App;
