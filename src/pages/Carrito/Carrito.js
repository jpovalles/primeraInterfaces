import React from "react";
import { Link } from "react-router-dom";
import  Navbar from '../../components/navbar'
import styles from './Carrito.module.css'
import Article from '../../components/article'

function Carrito(){
    return(
        <div>
            <div className={styles.cont_principal}>
                <div style={{width: '20%'}}>
                    <Link className={styles.botonRegresar} to="/">Seguir comprando</Link>
                </div>
                <div style={{width: '80%'}}>
                    <h1 className={styles.titulo}>Carrito de compras</h1>
                </div>
            </div>
            <div className={styles.cont_principal}>
                <div className={styles.columna_izq}>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    
                </div>
                <div className={styles.columna_der}>
                    <div className={styles.barra_sup}>
                        <h2 className={styles.subtitulo}>Resumen de compras</h2>
                    </div>
                    <div className={styles.parteInf}>
                        <div className={styles.desc}>
                            <p className={styles.texto}>Ítems</p>
                            <p className={styles.texto}>IVA</p>
                            <p className={styles.texto}>TOTAL</p>
                        </div>
                        <div className={styles.precio}>
                            <p className={styles.texto}>$$$</p>
                            <p className={styles.texto}>$$$</p>
                            <p className={styles.texto}>$$$$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;