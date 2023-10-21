import React, { useState } from 'react';
import './signIn.css';
import { activar } from "../store/botonProfile";
import { desactivarLog } from "../store/botonLogIn";
import { desactivarSign } from "../store/botonSignUp";
import { activadorCarrito } from "../store/botonCarrito";
import { activadorArticulo } from '../store/botonArticulo';
import { useDispatch, useSelector } from "react-redux";

function SignIn({ onCloseSignIn }) {
  const { activador } = useSelector((state) => state.profile);
  const { activadorLog} = useSelector((state) => state.log)
  const { activadorSign} = useSelector((state) => state.sign)
  const { activadorCar} = useSelector((state) => state.car)
  const { activadorArt } = useSelector((state) => state.art)

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Mostrar mensaje de éxito
    setSuccessMessage("Te registraste con éxito");

    // Desaparecer el mensaje después de 2 segundos y ejecutar
    setTimeout(() => {
      setSuccessMessage("");
      dispatch(activar());
      dispatch(desactivarLog());
      dispatch(desactivarSign());
      dispatch(activadorCarrito());
      dispatch(activadorArticulo());
      onCloseSignIn();
    }, 1000);
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={onCloseSignIn}>X</button>
        <h2>Registrarte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Registrarte</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
}

export default SignIn;



