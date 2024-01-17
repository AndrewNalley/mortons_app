import logo from '../assets/SVGs/CircleFullShopNameBlue.svg'
import NavBar from './NavBar';

export default function Header() {

    return (
        <>
            <div className="header-container">
                <img className='header-logo' src={logo} alt="logo" width={500} />
            </div>
            <NavBar />

        </>
    );
}
