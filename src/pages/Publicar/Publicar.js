import React from "react";
import styles from './Publicar.module.css'
import { Link } from "react-router-dom";


function Publicar(){
    return(
        <div style={{backgroundColor: '#00171F'}}>
            <div className={styles.cont_principal}>
                <div style={{width: '20%'}}>
                    <Link className={styles.botonCancelar} to="/">Cancelar</Link>
                </div>
                <div style={{width: '80%'}}>
                    <h1 className={styles.titulo}>Publicar artículo</h1>
                </div>
            </div>
            <div className={styles.cont2}>
                <div className={styles.contImagen}>
                    <img src='https://liscanopower.com/wp-content/uploads/2023/07/e8b38933-7dc4-4509-bc5b-7056ab4c188e.jpeg' className={styles.imagen}/>
                    <button className={styles.btnImage}>Insertar Imagen</button>
                </div>
                <div className={styles.contTexto}>
                    <h1 className={styles.text1}>Proporciona información del artículo</h1>
                    <form>
                        <input type="text" name="Nombre" placeholder="Nombre del producto" className={styles.form}/>
                        <input type="text" name="talla" placeholder="Talla disponible" className={styles.form}/>
                        <input type="number" name="precio" placeholder="Precio" className={styles.form}/>
                        <input type="number" name="Cantidad" placeholder="Cantidad disponible" className={styles.form}/>
                        <select class="form-select" aria-label="Default select example" className={styles.estado}>
                            <option selected>Selecciona el estado</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Poco uso">Poco uso</option>
                            <option value="Medianamente usado">Medianamente usado</option>
                            <option value="Muy usado">Muy usado</option>
                        </select>
                        <select class="form-select" aria-label="Multiple select example" className={styles.metodo}>
                            <option selected>Selecciona el método de pago</option>
                            <option value="Nuevo">Efectivo</option>
                            <option value="Poco uso">Tarjeta de credito</option>
                            <option value="Medianamente usado">Nequi</option>
                            <option value="Muy usado">Contraentrega</option>
                        </select>
                        <input type="submit" value="Publicar artículo" className={styles.btn}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Publicar;