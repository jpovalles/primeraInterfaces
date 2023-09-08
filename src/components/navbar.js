import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function navbar(){
    <nav>
        <div  className={styles.logo} >
            <img src="football-team.webp"></img>
        </div>
        <div className={styles.div1}>
            <ul>
                <li><Link to="/" className={styles.Link}>HOME</Link></li>
                <li><Link to="/news" className={styles.Link}>NEWS</Link></li>
                <li><Link to="/fanpage" className={styles.Link}>FANPAGE</Link></li>
                <li><Link to="/discord" className={styles.Link}>DISCORD</Link></li>
                <li><Link to="/fbgroup" className={styles.Link}>FB GROUP</Link></li>
                <li><Link to="/affiliate" className={styles.Link}>AFFILIATE</Link></li>
            </ul>
        </div>
        
        <div className={styles.div2}>
            <ul>
                
            <li> <Link className={styles.Link}>AMERICAS</Link></li>
            <li><Link className={styles.Link}>LOG IN</Link></li>
                
            </ul> 
        </div>
    </nav>
}