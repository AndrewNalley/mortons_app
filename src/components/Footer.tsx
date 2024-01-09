
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <h6>FOOTER</h6>
            <p>Copyright ©️ {currentYear} Andrew Nalley </p>
        </>
    );
}
