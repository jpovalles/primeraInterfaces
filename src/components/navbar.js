import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import icon from '../images/fav.ico'
import { useSelector } from "react-redux";



function Navbar({onOpenModal, onOpenSignIn}){
    const {activador} = useSelector((state) => state.profile)
    const {activadorLog} = useSelector((state) => state.log)
    const {activadorSign} = useSelector((state) => state.sign)
    const { activadorCar } = useSelector((state) => state.car)
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
                { activadorCar ? (
                    <Link className={styles.Link} to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                ): null}
                { activadorLog ? (
                    <Link className={styles.LogIn} onClick={()=>{onOpenModal();}}>Log In</Link>
                ): null}
                { activadorSign ? (
                    <Link className={styles.SignUp} onClick={()=>{onOpenSignIn()}}>Sign Up</Link>
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
                            <Link 
                                to="/log"
                                onClick={() => {
                                    dispatch(desactivar());
                                    dispatch(activarLog());
                                    dispatch(activarSign());
                                    dispatch(desactivarCarrito());
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
