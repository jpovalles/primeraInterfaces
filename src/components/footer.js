import React from "react";
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return(
        <footer>
            <div className={styles.main}> 
                <p style={{fontWeight: "bold",}}>Diseñado por:</p>
                <div className={styles.ovalles}>
                    <p>Juan Pablo Ovalles Ceron</p>
                    <a href="https://twitter.com/jpovallesceron">
                        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
                    </a>
                    <a href="https://github.com/jpovalles">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                    </a>
                    <a href="https://www.instagram.com/jpovallesc/">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                    </a>
                </div>

                <div className={styles.ospina}>
                    <p>Juan Pablo Ospina Cobo</p>
                        <a href="https://twitter.com/JuanOspi1216">
                            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://github.com/Juan-Ospina1216">
                            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://www.instagram.com/jp.ospina16/">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                        </a>
                </div>

                <div className={styles.silva}>
                    <p>Jhon Arlex Silva Rivera</p>
                    <a href="https://twitter.com/jpovallesceron">
                        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
                    </a>
                    <a href="https://github.com/jhonriverat">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                    </a>
                    <a href="https://www.instagram.com/jhonriverat/">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                    </a>
                </div>


            </div>
        </footer>
    )
}

export default Footer;