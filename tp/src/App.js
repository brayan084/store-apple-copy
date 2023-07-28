import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Carrusel from './carrusel';
import Hero from './hero';
import Catalogo from './catalogo';
import ListadoDeProductos from './listadoDeProductos';
import Footer from './footer';
import Pedido from './pedidos';
import Reportes2 from './reportes_compras';
import Reportes1 from './reportes_ventas';
import Clientes from './clientes';
import Proveedores from './proveedores';
import InputDemo from './formulario';
/* importamos cada componente */



function App() {
  return (
    <div> {/* usando "react-router-dom" creamos las rutas de los componentes */}
      <Router>
        <Navbar /> {/* menu */}
        <Routes>
          <Route path='/' element={<><><Hero /><Carrusel /></><Catalogo /></>}></Route>
          <Route path='/listadoDeProductos' element={<ListadoDeProductos />}></Route>
          <Route path='/formulario' element={<InputDemo />}></Route>
          <Route path='/clientes' element={<Clientes />}></Route>
          <Route path='/Pedidos' element={<Pedido />}></Route>
          <Route path='InputDemo' element={<InputDemo />}></Route>
          <Route path='/ReportesVentas' element={<Reportes1 />}></Route>
          <Route path='/ReportesCompras' element={<Reportes2 />}></Route>
        </Routes>
        <Footer /> {/* pie de pagina */}
      </Router>
    </div>
  );
}

export default App;
