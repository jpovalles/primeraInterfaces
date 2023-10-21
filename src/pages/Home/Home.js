//import { Link } from "react-router-dom";
import React from "react";
import styles from './Home.module.css'
import Article from '../../components/article'
import Postnav from "../../components/postnav";
import Categories from "../../components/categories"
import img from "../../images/homeParallax.jpg"
import logo from "../../images/logo.png"
import { Parallax } from "react-parallax";
import { useSelector } from "react-redux";


const inStyles = {
    position : "absolute",
    top: "50%",
    left: "50%",
    padding: 20,
    transform: "translate(-50%, -50%)"
}

function Home(){
    return(
        <div className={styles.main}>
            
            <Parallax bgImage={img} strength={200}>
                <div style={{height:"70vh"}}>
                    <Postnav/>
                    <div style={inStyles}>
                        <img src={logo} height={272} width={1319}></img>
                    </div>
                </div>
            </Parallax>
            <div className={styles.tittle}>
                <Categories/>
            </div>
            <h1>Trends</h1>
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
                
            </div>
            <h1>Ofertas</h1>
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
            </div>
        </div>
    )
}

export default Home;