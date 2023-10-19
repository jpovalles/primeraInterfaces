import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"

function Categories(){
    return(
        <div className={styles.drop}>
            <button className={styles.dropbtn}>Categorias</button>
            <div className={styles.dropcontent}>
                <Link className={styles.Link} to="/sport">Futbol</Link>
                <Link className={styles.Link} to="/sport">Baloncesto</Link>
                <Link className={styles.Link} to="/sport">Tenis</Link>
                <Link className={styles.Link} to="/sport">Volleyball</Link>
            </div>
        </div>
    )
}

export default Categories;