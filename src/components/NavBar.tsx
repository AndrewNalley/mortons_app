import { NavLink } from "react-router-dom"


export default function NavBar() {

    return (
        <nav className="nav container">
            <NavLink className="nav-text link-text" to=''>Home</NavLink>
            <NavLink className="nav-text link-text" to='about'>About</NavLink>
            <NavLink className="nav-text link-text" to='gallery'>Gallery</NavLink>
            <NavLink className="nav-text link-text" to='contact'>Contact</NavLink>
        </nav>
    )
}