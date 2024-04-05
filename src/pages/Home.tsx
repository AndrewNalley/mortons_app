import { NavLink } from 'react-router-dom'
import tray from '../assets/photos/proj-photos/Craft_Lindsey-34.jpg'

export default function Home() {
    return (
        <section className='page container'>
            <h1 className="page-header page-header-text">Welcome to Morton's Mementos</h1>
            <div>
                <NavLink to='/gallery'>
                    <h4 className='link-btn' >Resin Coasters, Trays, Candles, Extracts, and more! </h4>
                </NavLink>
            </div>

            <div>
                <img src={tray} className='bold-photo' alt='by the pond' />
            </div>
            <br />
            <NavLink to='/about'>
                <h5 className='link-btn' >Learn more about our store</h5>
            </NavLink>
        </section>
    );
}
