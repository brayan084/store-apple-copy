import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Carrusel from './carrusel';
import Banner from './banner';
import Catalogo from './catalogo';
import ListadoDeProductos from './listadoDeProductos';
import Footer from './footer';
import Pedido from './pedidos';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><><Banner /><Carrusel /></><Catalogo /></>}></Route>
          <Route path='/Pedidos' element={<Pedido />}></Route>
          <Route path='/listadoDeProductos' element={<ListadoDeProductos />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
