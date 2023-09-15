import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Navbar({onOpenModal, onOpenSignIn}){
    return(
        <nav>
            <div  className={styles.home} >
                <Link className={styles.Link} to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </div>
            <div className={styles.buscador}>
                <input required="" className={styles.campo}/>
                <Link className={styles.Link}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>
            
            <div className={styles.navEnd}>
                <Link className={styles.Link} to="/about">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <Link className={styles.Link} onClick={()=>{onOpenModal();}}>Log In</Link>
                <Link className={styles.Link} onClick={()=>{onOpenSignIn()}}>Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;