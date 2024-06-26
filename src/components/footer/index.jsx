import logoImg from "../../assets/instagram.png";
import "./styles.css";
import { Link,  } from 'react-router-dom';
import { Login } from "../../pages/Login";

export function Footer () {
    return(
        <div>
            <footer>
                <h1 className="sigam">Nos sigam nas nossas redes socias</h1>
                <a href=""><img className="img-insta" src={logoImg} alt="" /></a>
            </footer>
        </div>
    )
}