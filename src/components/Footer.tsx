
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <h6>FOOTER</h6>
            <p className="footer-text">©️ COPYRIGHT {currentYear} | SITE DESIGN BY ANDREW NALLEY </p>
        </>
    );
}
