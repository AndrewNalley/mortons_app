import { NavLink } from "react-router-dom"
import dog from "../assets/photos/stock-photos/dog-stock.jpg"
// import logo from './../images/clarion-horn.png'

export default function Header() {
    return (
        <>
            <h2> Morton's Mementos</h2>
            <div className="grid">
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='gallery'>Gallery</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </nav>
                <img className="main-photo" src={dog} alt="dog" />
                <div></div>
            </div>
        </>
    );
}
