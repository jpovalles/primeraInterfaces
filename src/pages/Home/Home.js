import { Link } from "react-router-dom";
import React from "react";
import styles from './Home.module.css'
import  Navbar from '../../components/navbar'
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
            <h1>HOME</h1>
        </div>
    )
}

export default Home;