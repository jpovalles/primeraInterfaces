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
                <Link className={styles.categories}>
                    <div className={styles.linkcat}>
                        Categorias
                    </div>
                </Link>
            </div>

            <div className={styles.postnavend}>
                <Link className={styles.nuevo}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
                <Link className={styles.perfil}>
                    <FontAwesomeIcon icon={faUser}/>
                </Link>
            </div>
            
        </div>
    )
}

export default Postnav;