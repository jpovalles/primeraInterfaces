import { Link } from "react-router-dom";
import React from "react";
import styles from './Home.module.css'
import  Navbar from '../../components/navbar'
import Article from '../../components/article'
import Postnav from "../../components/postnav";
import Modal from "../../components/modal";
/*
import { useState } from "react";
import Container from '../../components/container';

function Home(){
    const [posts] = useState([{
        name: 'Nombre1'
        }, {
        name: 'Nombre2'
        }, {
        name: 'Nombre3'
        }]);
    
    const getDataFromChild = (data) => {
        console.log(`Viendo data desde App: ${data}`);
    }

    return (
        <div>
            { posts.map((p, i)=>(
            <Container
                key={p.id}
                name={p.name}
                getData={getDataFromChild}/>
            ))
            }
            <h1>Home</h1>
        </div>
    );
}*/

function Home(){
    return(
        <div>
            <Navbar/>
            <Postnav/>
            <h1>HOME</h1>
            <h1>Trends</h1>
            <div className={styles.items}>
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
            </div>
        </div>
    )
}

export default Home;