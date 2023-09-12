import './App.css';
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.esm';
import 'bootstrap/dist/js/bootstrap.bundle';
*/
//import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
//import { library } from '@fortawesome/fontawesome-svg-core'



function App(){
  
    return (
      <div className='App'>
        <Routes>  {/*Hace la de un switch, por medio de casos, verifica el path */}
          <Route exact path="/" element={<Home/>}/> {/*EN element va el componente que hace la de pagina */}
          <Route exact path="/news" element={<About/>}/>
          <Route exact path="/fanpage" element={<About/>}/>
          <Route exact path="/discord" element={<About/>}/>
          <Route exact path="/fbgroup" element={<About/>}/>
          <Route exact path="/affiliate" element={<About/>}/>
        </Routes>
      </div>
    );
}


export default App; /*siempre tiene que estar obligau */