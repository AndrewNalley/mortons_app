import { NavLink } from "react-router-dom"
import logo from "../assets/photos/stock-photos/dog-stock.jpg"
// import logo from './../images/clarion-horn.png'

export default function Header() {
    return (
        <>
            <div className="grid">
                <h2>HEADER</h2>
                <img className="main-photo" src={logo} alt="dog" height={100} width={100} />
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='gallery'>Gallery</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
        </>
    );
}
