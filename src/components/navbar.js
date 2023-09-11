import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav>
            <div  className={styles.home} >
                <Link className={styles.Link}>Inicio</Link>
            </div>
            <div className={styles.buscador}>
                <input required="" className={styles.campo}/>
                <input type="submit" value="🔎" className={styles.buscar}/>

            </div>
            
            <div className={styles.navEnd}>
                <ul>
                    <li> <Link className={styles.Link} to="/about">🛒</Link></li>
                    <li><Link className={styles.Link}>Log In</Link></li>
                    <li><Link className={styles.Link}>Sign Up</Link></li>
                </ul> 
            </div>
        </nav>
    )
}

export default Navbar;