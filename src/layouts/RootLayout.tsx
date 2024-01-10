import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function RootLayout() {


    return (
            <main data-theme="light" className='app-main'>
                <Header />
                <Outlet />
                <Footer />
            </main>
    );
}
