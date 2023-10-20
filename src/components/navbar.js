import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import icon from '../images/fav.ico'


function Navbar({onOpenModal, onOpenSignIn}){
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
                <Link className={styles.Link} to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <Link className={styles.LogIn} onClick={()=>{onOpenModal();}}>Log In</Link>
                <Link className={styles.SignUp} onClick={()=>{onOpenSignIn()}}>Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;