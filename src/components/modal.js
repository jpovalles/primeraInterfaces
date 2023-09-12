import React from "react";
import { Link } from "react-router-dom";
import styles from './Modal.module.css'

function Modal(){
    return(
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <div className={styles.modalheader}>
                    <h3 className={styles.modaltittle}>INICIAR SESION</h3>
                </div>
                <div className={styles.modalbody}>
                    <form className={styles.form}>
                        {/*Metele estilo al modal y la funcionalidad de abrir y cerrar la ventala*/}
                        <input required />
                        <input required />
                        <input type="submit" value="Ingresar" />
                    </form>
                </div>
                <div className={styles.modalfooter}>
                <button className="button">Close</button>
                </div>
            </div>
        </div>
    )

}

export default Modal;