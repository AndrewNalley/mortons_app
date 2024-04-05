import logo from '../assets/SVGs/Logo/CircleFullShopNameBlue.svg'
import div1 from '../assets/SVGs/Other/div1.svg'


export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <div className='footer-container'>
                <img src={logo} alt='Mortons Logo' width={400} />
                <img src={div1} alt='divider' />
            </div>
            <div>
                <p className='footer-text'>©️ COPYRIGHT {currentYear} LINDSEY NALLEY | SITE DESIGN BY ANDREW NALLEY </p>
            </div>
        </>
    );
}
