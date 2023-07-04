import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pedido from './pedido';
// import Home from './Home';
import Bars from './reportes';
import Bars2 from './reportes2';
// import LinesChart from './reportes2';


function App() {
  return (

    <div className="App">


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path='/reportes' element={<Bars />}  />
        </Routes>
      </BrowserRouter> */}

      <div>
        <Pedido />
      </div>

      <div className='espacio'>
        <Bars/>
      </div>

      <div className='espacio'>
        <Bars2/>
      </div>

    </div>

  );
}

export default App;
