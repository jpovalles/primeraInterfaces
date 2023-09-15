import React from "react";
import { Link } from "react-router-dom";
import styles from './Postnav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Postnav(){
    return(
        <div className={styles.postnav}>
            <div className={styles.postStart}>
                <div className={styles.drop}>
                    <button className={styles.dropbtn}>Categorias</button>
                    <div className={styles.dropcontent}>
                        <Link className={styles.Link} to="/sport">Futbol</Link>
                        <Link className={styles.Link} to="/sport">Baloncesto</Link>
                        <Link className={styles.Link} to="/sport">Tenis</Link>
                        <Link className={styles.Link} to="/sport">Volleyball</Link>
                    </div>
                </div>
            </div>

            <div className={styles.postnavend}>
                <Link className={styles.nuevo}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
                <Link className={styles.perfil} to="/profile">
                    <FontAwesomeIcon icon={faUser}/>
                </Link>
            </div>
            
        </div>
    )
}

export default Postnav;