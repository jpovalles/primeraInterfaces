import React from "react";
//import { Link } from "react-router-dom";
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { desactivar } from "../../store/botonProfile";
import { activarLog } from "../../store/botonLogIn";
import { activarSign } from "../../store/botonSignUp";
import { desactivarCarrito } from "../../store/botonCarrito";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
    const { activador } = useSelector((state) => state.profile);
    const { activadorLog } = useSelector((state) => state.log);
    const { activadorSign } = useSelector((state) => state.sign);
    const { activadorCar} = useSelector((state) => state.car)

    const dispatch = useDispatch();

    return (
        <div className={styles.profile}>
            <div className={styles.imageCnt}>
                <div className={styles.image}>
                    <FontAwesomeIcon icon={faUser} className={styles.imgIcon} />
                </div>
                <div>
                    <button className={styles.btnImage}>Cambiar Imagen</button>
                </div>
            </div>
            <div className={styles.formCnt}>
                <h1>Tu perfil</h1>
                <form className={styles.form}>
                    <input value="Jhon"></input>
                    <input value="Ospina"></input>
                    <input value="Jhonospina@gmail.com"></input>
                    <input type="password" value="blablabla"></input>
                    <input value="Cra 100 #34-96"></input>
                    <button type="submit" className={styles.save}>Guardar cambios</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
