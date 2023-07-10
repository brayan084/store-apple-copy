import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/* import ListadoDeProductos from './listadoDeProductos'; */
import './App.css';
import Navbar from './navbar';
import CarouselF from './carousel';
import Banner from './banner';
import Catalogo from './catalogo';
import Footer from './footer';
import Pedido from './pedido';
import Reportes1 from './reportes';
import Reportes2 from './reportesCompras';



function App() {
  return (
    <div>
      <Router>
        <div><Navbar /></div>
        {/* <div><Banner /></div>
        <div><CarouselF /></div>
        <div><Catalogo /></div> */}
        <Routes>
          <Route path='/' element={<Catalogo />}></Route>
          <Route path='/Pedidos' element={<Pedido />}></Route>
          <Route path='/ReportesVentas' element={<Reportes1 />}></Route>
          <Route path='/ReportesCompras' element={<Reportes2 />}></Route>
        </Routes>
        <div><Footer /></div>
      </Router>
    </div>
  );
}

export default App;
