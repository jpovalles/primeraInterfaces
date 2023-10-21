import React from "react";
import { Link } from "react-router-dom";
import styles from './Postnav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";


function Postnav(){
    //const { activador } = useSelector((state) => state.profile);
    return(
        <div className={styles.postnav}>
            <div className={styles.postnavend}>
                {/*
                <Link className={styles.nuevo}  to="/submit">
                    <FontAwesomeIcon icon={faPlus}/>
                </Link>
    */} 
    {/*
                { activador ? (
                    <Link className={styles.perfil} to="/profile">
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>
                ): null}
                */}
            </div>
        </div>
    )
}

export default Postnav;