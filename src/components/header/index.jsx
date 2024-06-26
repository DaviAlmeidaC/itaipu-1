import logoImg from "../../assets/LOGO.png";
import "./styles.css";
import { Link,  } from 'react-router-dom';
import { Login } from "../../pages/Login";

export function Header () {
    

    return(
        <header className="header1">
            <img className="img-logo" src={logoImg} alt="" />
            <Link to='/home'>
            <a className="link-header" href="">Home</a>
            </Link>
           

            <Link to='/login'>
            <button className="button-header">Login</button>
            </Link>
        </header>
    );
}