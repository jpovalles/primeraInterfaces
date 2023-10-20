//import { Link } from "react-router-dom";
import React from "react";
import styles from './Sport.module.css'
import Article from '../../components/article'
import Postnav from "../../components/postnav";
import { Parallax } from "react-parallax";
import soccer from "../../images/soccer7.jpg"
import tennis from "../../images/tennis2.jpg"
import basket from "../../images/basket.jpg"
import volley from "../../images/volley.jpg"



const inStyles = {
    position : "absolute",
    top: "50%",
    left: "50%",
    padding: 20,
    transform: "translate(-50%, -50%)"
}

function Sport(){
    return(
        <div className={styles.main}>
            <Parallax bgImage={volley} strength={200}>
                <div style={{height:"60vh"}}>
                    <Postnav/>
                    <div style={inStyles}>
                        SOCCER
                    </div>
                </div>
            </Parallax>
            <h1>DEPORTE: XXXXX</h1>
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