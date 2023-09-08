import { Link } from "react-router-dom";
import Container from "../../components/container";

function About(){
    return(
        <div>
            <h1>About</h1>
            <Link to="/">
                Home
            </Link>
            <Container/>
        </div>
    )
}

export default About;