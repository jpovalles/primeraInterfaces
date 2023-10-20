import React from "react";
import styles from './notFound.module.css'
import icon from '../../images/notFound.png'

function NotFound(){
    return(
        <div className={styles.main}>
            <div className={styles.cnt}>
                <h1>No se encontró la página</h1>
                <h2>¿Cómo llegaste aqui?</h2>
            </div>
            <div className={styles.icon}>
                <img src={icon}></img>
            </div>
        </div>
    )
}

export default NotFound;