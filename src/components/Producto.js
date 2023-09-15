import React from "react";

import styles from './Producto.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'; 

function Producto(){
    return(
        <div>
            <div className={styles.cont_principal}>
                <div className={styles.cont_imagen}>
                    <img src='https://liscanopower.com/wp-content/uploads/2023/07/e8b38933-7dc4-4509-bc5b-7056ab4c188e.jpeg' className={styles.imagen}/>
                </div>
                <div className={styles.cont_texto}>
                    <h1 className={styles.titulo}>Producto</h1>
                    <p className={styles.desc}>Nombre del producto:</p>
                    <p className={styles.desc}>Precio: $$$</p>
                    <div className={styles.subcontenedor}>
                        <div className={styles.seccion}>
                            <p className={styles.desc}>Estado:</p>
                        </div>
                        <div className={styles.seccion}>
                            <p className={styles.uso}>Nuevo</p>
                        </div>
                        <div className={styles.seccion}>
                            <p className={styles.uso}>Poco uso</p>
                        </div>
                        <div className={styles.seccion}>
                            <p className={styles.uso}>Muy usado</p>
                        </div>
                    </div>
                    <p className={styles.desc}>Método de pago: XXXXXXX</p>
                    <div className={styles.subcontenedor}>
                        <div className={styles.seccion}><p className={styles.desc}>Seleccionar talla:</p></div>
                        <div className={styles.seccion}>
                            <Dropdown className={styles.menu}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Busque su talla
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>40 US</Dropdown.Item>          
                                    <Dropdown.Item>38 US</Dropdown.Item>  
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className={styles.subcontenedor}>
                        <div className={styles.seccion}><p className={styles.desc}>Cantidad:</p></div>
                        <div className={styles.seccion}>
                        <input className={styles.number} type="number" id="numero" name="numero" min="0" max="3" step="1"></input>
                        </div>
                    </div>
                    <div className={styles.subcontenedor}>
                        <div className={styles.seccion}>
                            <button className={styles.boton}>Agregar al carrito</button>
                        </div>
                        <div className={styles.seccion}>
                            <button className={styles.boton}>Chat con vendedor 📤</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Producto;