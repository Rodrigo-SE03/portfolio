import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (
        <nav className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header;