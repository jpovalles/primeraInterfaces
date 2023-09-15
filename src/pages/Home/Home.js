//import { Link } from "react-router-dom";
import React from "react";
import styles from './Home.module.css'
import Article from '../../components/article'
import Postnav from "../../components/postnav";

function Home(){
    return(
        <div>

            <Postnav/>
            <h1>SPORTSTORE</h1>
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
                <Article/>
                <Article/>
            </div>
        </div>
    )
}

export default Home;