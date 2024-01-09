import { NavLink } from "react-router-dom"
import logo from "../assets/photos/stock-photos/dog-stock.jpg"

// import logo from './../images/clarion-horn.png'

export default function Header() {

    const section = "section"

    return (
        <>
            <header className="header-container">
                <nav className="left-section">
                    <NavLink className={section} to='/'>Home</NavLink>
                    <NavLink className={section} to='about'>About</NavLink>
                </nav>
                <div className="center-section">
                    <img className="main-photo" src={logo} alt="dog" height={100} width={100} />
                    <h1 className="shop-name">Morton's Mementos</h1>
                    <p className="shop-description">and Eclectic gifts</p>
                </div>
                <nav className="right-section">
                    <NavLink className={section} to='gallery'>Gallery</NavLink>
                    <NavLink className={section} to='contact'>Contact</NavLink>
                </nav>
            </header>
        </>
    );
}
