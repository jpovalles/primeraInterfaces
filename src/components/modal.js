import React, { useState } from "react"; 
import styles from './Modal.module.css';
import { activar } from "../store/botonProfile";
import { desactivarLog } from "../store/botonLogIn";
import { desactivarSign } from "../store/botonSignUp";
import { activadorCarrito } from "../store/botonCarrito";
import { useDispatch, useSelector } from "react-redux";

function Modal({ onClose }) {
    const { activador } = useSelector((state) => state.profile);
    const { activadorLog} = useSelector((state) => state.log)
    const { activadorSign} = useSelector((state) => state.sign)
    const { activadorCar} = useSelector((state) => state.car)
    const dispatch = useDispatch();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const camposLlenos = correo !== "" && password !== "";

    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <div className={styles.modalheader}>
                    <div className={styles.iniciar}>
                        <h3 className={styles.modaltittle}>INICIAR SESION</h3>
                    </div>
                    <div className={styles.close}>
                        <button className={styles.closeIcon} onClick={() => { onClose(); }}>X</button>
                    </div>
                </div>
                <div className={styles.modalbody}>
                    <form className={styles.form}>
                        <input
                            type="email"
                            required
                            placeholder="Correo"
                            className={styles.inText}
                            value={correo} 
                            onChange={e => setCorreo(e.target.value)}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Contraseña"
                            className={styles.password}
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                        <button 
                            onClick={() => {
                                dispatch(activar());
                                dispatch(desactivarLog());
                                dispatch(desactivarSign());
                                dispatch(activadorCarrito());
                                onClose();
                            }}
                            disabled={!camposLlenos} 
                        type="submit">Iniciar Sesion
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;

