import "../stylesheets/header.css"
import { useState } from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    {(menuOpen)? 'X' : '☰'}
                </button>

                <ul className={ (menuOpen)? "nav-links open" : "nav-links"}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#education">Formação</a></li>
                </ul>
            </nav>
        </header>
    )
}