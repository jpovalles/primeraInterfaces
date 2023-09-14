import React from "react";
import styles from './Modal.module.css'

function Modal({onClose}){
    return(
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <div className={styles.modalheader}>
                    <div className={styles.iniciar}>
                        <h3 className={styles.modaltittle}>INICIAR SESION</h3>
                    </div>
                    <div className={styles.close}>
                        <button className={styles.closeIcon} onClick={()=> {onClose();}}>X</button>
                    </div>
                </div>
                <div className={styles.modalbody}>
                    <form className={styles.form}>
                        {/*Metele estilo al modal y la funcionalidad de abrir y cerrar la ventala*/}
                        <input type="text" required placeholder="Correo"/>
                        <input type="password" required placeholder="Contraseña"/>
                        <input type="submit" value="Ingresar" />
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Modal;