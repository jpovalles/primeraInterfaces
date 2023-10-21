import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"
import { useDispatch } from "react-redux";
import { filtrarBasket, filtrarFutbol, filtrarTenis, filtrarVolley } from "../store/sportTittle";

function Categories(){
    const dispatch = useDispatch()
    return(
        <div className={styles.drop}>
            <button className={styles.dropbtn}>Categorias</button>
            <div className={styles.dropcontent}>
                <Link className={styles.Link} to="/sport" onClick={()=>dispatch(filtrarFutbol())}>Futbol</Link>
                <Link className={styles.Link} to="/sport" onClick={()=>dispatch(filtrarBasket())}>Baloncesto</Link>
                <Link className={styles.Link} to="/sport" onClick={()=>dispatch(filtrarTenis())}>Tenis</Link>
                <Link className={styles.Link} to="/sport" onClick={()=>dispatch(filtrarVolley())}>Volleyball</Link>
            </div>
        </div>
    )
}

export default Categories;