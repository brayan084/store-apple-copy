import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import CarouselF from './carousel';
import Banner from './banner';
import Catalogo from './catalogo';
/* import ListadoDeProductos from './listadoDeProductos'; */
import Lproductos from './LProductos2';
import Footer from './footer';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><><Banner /><CarouselF /></><Catalogo /></>}></Route>
          {/*<Route path='/listadoDeProductos' element={<ListadoDeProductos />}></Route>*/}
           <Route path='/LProductos2' element={<Lproductos />}></Route> 
          {/* <Route path='/' element={</>}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
