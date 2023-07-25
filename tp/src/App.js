import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import CarouselF from './carousel';
import Banner from './banner';
import Catalogo from './catalogo';
/* import ListadoDeProductos from './listadoDeProductos'; */
import BasicDemo from './CARRUSELfOTOS.JS';
import Footer from './footer';
import InputDemo from './input';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><><Banner /><CarouselF /></><Catalogo /></>}></Route>
          {/*<Route path='/listadoDeProductos' element={<ListadoDeProductos />}></Route>*/}
           <Route path='/input' element={<InputDemo />}></Route> 
           <Route path='/CARRUSELfOTOS' element={<BasicDemo />}></Route>
          {/* <Route path='/' element={</>}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
