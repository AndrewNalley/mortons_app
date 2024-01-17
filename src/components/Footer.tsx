import logo from "../assets/SVGs/CircleLogoTwoTone.svg"
// import { SocialIcon } from 'react-social-icons'
// import 'react-social-icons/instagram'
// import 'react-social-icons/twitter'
// import 'react-social-icons/facebook'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer-container">
                {/* <div className="footer-socials">
                    <SocialIcon url="https://www.instagram.com/mortons.mementos/" />
                    <SocialIcon url="www.twitter.com" />
                    <SocialIcon url="www.facebook.com" />
                </div> */}
                <img src={logo} alt="Morton's Logo" width={200} />

            </div>
            <p className="footer-text">©️ COPYRIGHT {currentYear} | SITE DESIGN BY ANDREW NALLEY </p>
        </>
    );
}
