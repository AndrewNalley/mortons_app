
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <h2>Footer stuff</h2>
            <p>Copyright ©️ {currentYear} Andrew Nalley </p>
        </>
    );
}