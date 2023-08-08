import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './partes en comun/navbar';
import Carrusel from './home/carrusel';
import Hero from './home/hero';
import Catalogo from './home/catalogo';
import ListadoDeProductos from './productos/listadoDeProductos';
import Footer from './partes en comun/footer';
import Pedido from './pedidos/pedidos';
import Reportes2 from './reportes/reportes_compras';
import Reportes1 from './reportes/reportes_ventas';
import Clientes from './clientes y proveedores/clientes';
import Proveedores from './clientes y proveedores/proveedores';
import Pantalla_producto from './pantalla del producto iphone/pantalla';
import InputDemo from './productos/formulario';
import InputDemo2 from './clientes y proveedores/formularioPro';
import Pantalla_producto_ipods_max from './pantalla del producto ipod max/pantalla';
import Pantalla_producto_MacBook_Air from './pantalla del producto MacBook Air/pantalla';
import Pantalla_producto_imac from './pantalla del producto imac/pantalla';
import Pantalla_producto_ipad from './pantalla del producto ipad/pantalla';
import Pantalla_producto_watch from './pantalla del producto apple watch/pantalla';
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
          <Route path='/proveedores' element={<Proveedores />}></Route>
          <Route path='/formularioPro' element={<InputDemo2 />}></Route>
          <Route path='/clientes' element={<Clientes />}></Route>
          <Route path='/Pedidos' element={<Pedido />}></Route>
          <Route path='/ReportesVentas' element={<Reportes1 />}></Route>
          <Route path='/ReportesCompras' element={<Reportes2 />}></Route>
          <Route path='/iphone' element={<Pantalla_producto />}></Route>
          <Route path='/ipods-max' element={<Pantalla_producto_ipods_max />}></Route>
          <Route path='/MacBook' element={<Pantalla_producto_MacBook_Air />}></Route>
          <Route path='/Imac' element={<Pantalla_producto_imac />}></Route>
          <Route path='/Ipad' element={<Pantalla_producto_ipad />}></Route>
          <Route path='/apple-watch' element={<Pantalla_producto_watch />}></Route>
        </Routes>
        <Footer /> {/* pie de pagina */}
      </Router>
    </div>
  );
}

export default App;
