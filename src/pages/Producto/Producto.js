import React from "react";

import styles from './Producto.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Producto(){
    return(
        <div className={styles.main}>
            <div className={styles.cont_principal}>
                <div style={{width: '20%'}}>
                    <Link className={styles.botonCancelar} to="/">Cancelar</Link>
                </div>
                <div style={{width: '80%'}}>
                    <h1 className={styles.titulo}>Producto</h1>
                </div>
            </div>
            <div className={styles.cont2}>
                <div className={styles.cont_imagen}>
                    <img src='https://liscanopower.com/wp-content/uploads/2023/07/e8b38933-7dc4-4509-bc5b-7056ab4c188e.jpeg' className={styles.imagen}/>
                </div>
                <div className={styles.cont_texto}>
                    <div className={styles.titulos}>
                        <p className={styles.desc}>Nombre:</p>
                        <p className={styles.desc}>Precio:</p>
                        <p className={styles.desc}>Estado:</p>
                        <p className={styles.desc}>Método de pago:</p>
                        <p className={styles.desc}>Tallas disponibles:</p>
                        <p className={styles.desc}>Cantidad:</p>  
                        <button className={styles.boton}>Agregar al carrito</button>
                    </div>
                    <div className={styles.descripcion}>
                        <p className={styles.desc}>XXXX </p>
                        <p className={styles.desc}>$$$$</p>
                        <p className={styles.uso}>Nuevo</p>
                        <p className={styles.desc}>XXXXXXX</p>
                        <select class="form-select" aria-label="Default select example" className={styles.menu}>
                            <option selected>Seleccionar talla</option>
                            <option value="1">37 US</option>
                            <option value="2">40 US</option>
                        </select>
                        <div className={styles.seccion}>
                        <input className={styles.number} type="number" id="numero" name="numero" min="0" max="3" step="1"></input>
                        </div>
                        <button className={styles.boton}>Chat con vendedor</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Producto;