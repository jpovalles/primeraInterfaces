import './App.css';
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.esm';
import 'bootstrap/dist/js/bootstrap.bundle';
*/
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sport from './pages/deporte/Sport';
import About from './pages/About/About';
import Modal from "./components/modal";
import Navbar from './components/navbar';
import Producto from './components/Producto'
import Profile from './pages/Profile/Profile';
import SignIn from './pages/signIn/signIn';




function App(){
    const[showModal, setShowModal] = useState(false)

    const onCloseModal = () => {
      setShowModal(false);
    }

    const onOpenModal = () => {
      setShowModal(true);
    }
    const[showSignIn, setShowSignIn] = useState(false)

    const onCloseSignIn = () => {
      setShowSignIn(false);
    }

    const onOpenSignIn = () => {
      setShowSignIn(true);
    }

    return (
      <div className='App'>
        <Navbar onOpenModal={onOpenModal} onOpenSignIn={onOpenSignIn}/>
        <Routes>  {/*Hace la de un switch, por medio de casos, verifica el path */}
          <Route exact path="/" element={<Home/>}/> {/*EN element va el componente que hace la de pagina */}
          <Route exact path="/sport" element={<Sport/>}/>
          <Route exact path="/product" element={<Producto/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/fbgroup" element={<About/>}/>
          <Route exact path="/affiliate" element={<About/>}/>
        </Routes>
        
        {showModal === true ? <Modal onClose={onCloseModal}/> : null}
        {showSignIn === true ? <SignIn onCloseSignIn={onCloseSignIn}/> : null}

      </div>
    );
}


export default App; /*siempre tiene que estar obligau */