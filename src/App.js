import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SobreMi from './components/acercaDeMi';
import Educacion from './components/educacion';
import ExperienciaLaboral from './components/experienciaLaboral';
import Habilidades from './components/habilidades';
import Contactame from './components/contactame';
import NavbarP from './components/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarP /> }>
            <Route path='acercaDeMi' element={ <SobreMi/> }></Route>
            <Route path='educacion' element={ <Educacion/> }></Route>
            <Route path='experienciaLaboral' element={ <ExperienciaLaboral/> }></Route>
            <Route path='habilidades' element={ <Habilidades/> }></Route>
            <Route path='contactame' element={ <Contactame/> }></Route>

            <Route path='*' element={ <Navigate replace to='/'/> }> </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
