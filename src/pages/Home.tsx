import { NavLink } from 'react-router-dom'
import tray from '../assets/photos/proj-photos/Craft_Lindsey-34.jpg'
import coaster from '../assets/photos/proj-photos/Craft_Lindsey-19.jpg'
import tierTray from '../assets/photos/proj-photos/Craft_Lindsey-36.jpg'
import leaf from '../assets/photos/proj-photos/Craft_Lindsey-58.jpg'


export default function Home() {
    return (
        <section className='page container'>
            <h1 className="page-header page-header-text">Welcome to Morton's Mementos</h1>
            <div>
                <NavLink to='/gallery'>
                    <h5 className='link-btn'>Coasters, Trays, Candles, Extracts, and more! </h5>
                </NavLink>
            </div>

            <div className='grid'>
                <NavLink to='/gallery'>
                    <img src={coaster} className='bold-photo' alt='by the pond' />
                </NavLink>
                <NavLink to='/gallery'>
                    <img src={tray} className='bold-photo' alt='by the pond' />
                </NavLink>
                </div>
                <div className='grid'>
                <NavLink to='/gallery'>
                    <img src={tierTray} className='bold-photo' alt='by the pond' />
                </NavLink>
                <NavLink to='/gallery'>
                    <img src={leaf} className='bold-photo' alt='by the pond' />
                </NavLink>
                
            </div>
            <br />
            <NavLink to='/about'>
                <h5 className='link-btn' >Learn more about our store</h5>
            </NavLink>
        </section>
    );
}
