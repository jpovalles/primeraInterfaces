import React from "react";
import { Link } from "react-router-dom";
import styles from './Article.module.css'

function Article(){
    return(
        <div className={styles.article}>
            <Link className={styles.Link}>
                <div className={styles.artImage}>
                </div>
                <div className={styles.artInfo}>
                    <h3>Precio: $$$$$</h3>
                    <h5>Producto: blablabla</h5>
                    <h6>Descripcion: blablabla</h6>
                </div>
            </Link>
        </div>
    )
}

export default Article;