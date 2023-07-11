import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import CarouselF from './carousel';
import Banner from './banner';
import Catalogo from './catalogo';
import ListadoDeProductos from './listadoDeProductos';
import Footer from './footer';



function App() {
  return (
    <div>
      {/*<div><Navbar /></div> 
      <div>< /></div>
      <div><CarouselF /></div>
      <div><Catalogo /></div>
      */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><><Banner /><CarouselF /></><Catalogo /></>}></Route>
          <Route path='/listadoDeProductos' element={<ListadoDeProductos />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
