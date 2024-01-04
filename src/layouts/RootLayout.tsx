import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h1>Site Navigation</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='schedule'>Schedule</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='profile'>Profile</NavLink>
                </nav>
                <Breadcrumbs />
            </header>

            <main>
                <Header /> 
                <Outlet />
                <Footer />
            </main>

        </div>
    )
}