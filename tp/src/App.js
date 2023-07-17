import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Carrusel from './carrusel';
import Banner from './banner';
import Catalogo from './catalogo';
/* import Lproductos from './LProductos2'; */
import Footer from './footer';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><><Banner /><Carrusel /></><Catalogo /></>}></Route>
{/*            <Route path='/LProductos2' element={<Lproductos />}></Route> */} 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
