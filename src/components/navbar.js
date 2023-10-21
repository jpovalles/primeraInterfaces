import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'
import icon from '../images/fav.ico'
import { useDispatch, useSelector } from "react-redux";
import { activarLog } from "../store/botonLogIn";
import { desactivar } from "../store/botonProfile";
import {activarSign} from "../store/botonSignUp";
import {desactivarCarrito} from "../store/botonCarrito";
import { desactivarArticulo } from "../store/botonArticulo";

function Navbar({onOpenModal, onOpenSignIn}){
    const {activador} = useSelector((state) => state.profile)
    const {activadorLog} = useSelector((state) => state.log)
    const {activadorSign} = useSelector((state) => state.sign)
    const { activadorCar } = useSelector((state) => state.car)
    const {cuenta} = useSelector((state) => state.contador)
    const { activadorArt } = useSelector((state) => state.art)

    const dispatch = useDispatch();
    const [menuAbierto, setMenuAbierto] = useState(false);    
    return(
        <nav className={styles.main}>
            <div  className={styles.home} >
                <Link className={styles.Link} to="/">
                    <img src={icon} width={'70px'} height={'70px'}></img>
                </Link>
            </div>
            <div className={styles.buscador}>
                <input required="" className={styles.campo}/>
                <Link className={styles.Link}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>
            
            <div className={styles.navEnd}>
                { activadorCar ? 
                        <Link className={styles.Link} to="/cart">
                            {cuenta != 0 && (<p className={styles.cantProductos}>{cuenta}</p>)}
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                : null}
                { activadorLog ? (
                    <Link className={styles.LogIn} onClick={()=>{onOpenModal();}}>Log In</Link>
                ): null}
                { activadorSign ? (
                    <Link className={styles.SignUp} onClick={()=>{onOpenSignIn()}}>Sign Up</Link>
                ): null}
                { activadorArt ? (
                    <Link className={styles.nuevo}  to="/submit">
                        <FontAwesomeIcon icon={faPlus}/>
                    </Link>
                ): null}
                { activador ? (
                <div className={styles.perfil}>
                    <FontAwesomeIcon 
                        icon={faUser}
                        onClick={() => setMenuAbierto(!menuAbierto)}
                    />
                    {menuAbierto && (
                        <div className={styles.dropdown}>
                            <Link to="/profile">Editar</Link>
                            <Link to="/"
                                onClick={() => {
                                    dispatch(desactivar());
                                    dispatch(activarLog());
                                    dispatch(activarSign());
                                    dispatch(desactivarCarrito());
                                    dispatch(desactivarArticulo());
                                }}
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    )}
                </div>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar;
