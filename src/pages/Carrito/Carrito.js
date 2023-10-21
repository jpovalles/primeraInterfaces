import React from "react";
import { Link } from "react-router-dom";
import  Navbar from '../../components/navbar'
import styles from './Carrito.module.css'
import Article from '../../components/article'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

import {useSelector } from "react-redux/";

function Carrito(){
    const size = useSelector((state)=>state.contador)
    const posts = new Array(size.cuenta).fill(0)
    return(
        <div className={styles.main}>
            <div className={styles.cont_principal}>
                <div style={{width: '20%'}}>
                {
                    size.cuenta === 0 ?
                        null
                        :
                        <Link className={styles.botonRegresar} to="/">Seguir comprando</Link>
                }
                </div>
                <div style={{width: '80%'}}>
                    <h1 className={styles.titulo}>Carrito de compras</h1>
                </div>
            </div>
            <div className={styles.cont_principal}>
                <div className={styles.columna_izq}>
                    {
                        size.cuenta === 0 ?
                        <div className={styles.empty}>
                            <FontAwesomeIcon icon={faGhost} className={styles.ghost} style={{"--fa-primary-color": "#003459", "--fa-secondary-color": "#80caff",}} />
                            <h1>Tu carrito esta vacío!</h1>
                            <h2>Explora nuestra tienda para encontrar lo que buscas.</h2>
                            <Link className={styles.botonRegresarGlow} to="/">Seguir comprando</Link>
                        </div>
                        :
                            posts.map(post=>(
                                <Article/>
                            ))
                        
                    }
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