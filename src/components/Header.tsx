import logo from '../assets/SVGs/Logo/CircleLogoTwoTone.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const section = 'section nav-text link-text'

    return (
        <>
            <header className='header-container'>
                <nav className='left-section'>
                    <NavLink className={section} to=''>Home</NavLink>
                    <NavLink className={section} to='about'>About</NavLink>
                    <NavLink className={section} to='social'>Woof!</NavLink>
                </nav>
                <div className='center-section'>
                    <img className='header-logo' src={logo} alt='logo' width={300} />
                </div>
                <nav className='right-section'>
                    <NavLink className={section} to='gallery'>Gallery</NavLink>
                    <NavLink className={section} to='packages'>Packages</NavLink>
                    <NavLink className={section} to='contact'>Contact</NavLink>
                </nav>
            </header>
        </>
    );
}
