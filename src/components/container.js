import React from "react";
import {useState} from 'react';
import styles from './Container.module.css'
import { Link } from "react-router-dom";


/*import { styled } from "styled-components";*/

//props = {..., name = ""};
//function Container(props){
function Container({name, getData}){
    const [showMessage, setShowMessage] = useState(true)
    const [message] = useState("Bienvenido a react");
    const onButtonClick = () =>{
        setShowMessage(!showMessage);
        /*if(message){
            setMessage("Carguing");
        }
        getData(10);*/
    }

    return(
        <div  className={styles.container}>
            {/*awo saga sagas */}
            <h1 className={styles.title}>
                Contenedor
            </h1>
            {
                showMessage ?
                <p>
                    {message}{name}
                </p>
                :
                null
            }
            <button>
                <Link to="/about">
                    Ir a about
                </Link>
            </button>
        </div>
    );
}

/* componente estilizado */

// const Button = styled.button`
//     backgroundColor: blue;
// `;

export default Container; //Si no lo escribo no puedo importar el comp en otro archivos