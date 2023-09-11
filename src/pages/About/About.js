import { Link } from "react-router-dom";
import Container from "../../components/container";
import  Navbar from '../../components/navbar'

function About(){
    return(
        <div>
            <Navbar/>
            <h1>About</h1>
            <Link to="/">
                Home
            </Link>
            <Container/>
        </div>
    )
}

export default About;