import React from "react";
import styles from './footer.module.css'



function Footer(){
    return(
        <footer style={{backgroundColor: '#003459'}}>
            <div className={styles.main}> 
                <a href="https://github.com/jpovalles" target="_blank" rel="noopener noreferrer">Juan Pablo Ovalles Ceron</a>.
                <a href="https://github.com/Juan-Ospina1216" target="_blank" rel="noopener noreferrer">Juan Pablo Ospina Cobo</a>.
                <a href="https://github.com/jhonriverat" target="_blank" rel="noopener noreferrer">Jhon Arlex Silva Rivera</a>.
            </div>
        </footer>
    )
}

export default Footer;