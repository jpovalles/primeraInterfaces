//import { Link } from "react-router-dom";
import React from "react";
import styles from './Sport.module.css'
import Article from '../../components/article'
import Postnav from "../../components/postnav";
import { Parallax } from "react-parallax";
import Categories from "../../components/categories";

import { useSelector } from "react-redux/";



const inStyles = {
    position : "absolute",
    top: "50%",
    left: "50%",
    padding: 20,
    transform: "translate(-50%, -50%)"
}

function Sport(){
    const img = useSelector((state)=>state.deporte)
    return(
        <div className={styles.main}>
            <Parallax bgImage={img.fuente} strength={200}>
                <div style={{height:"60vh"}}>
                    <Postnav/>
                    <div style={inStyles}>
                        <h1 style={{fontSize:"50px", fontWeight:"bold"}}>{img.texto}</h1>
                    </div>
                </div>
            </Parallax>
            <div className={styles.items}>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
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
        </div>
    )
}

export default Sport;