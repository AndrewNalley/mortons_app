import { NavLink } from 'react-router-dom'
import babyMarty from '../assets/photos/stock-photos/BabyMarty.jpeg'

export default function Woof() {

    return (
        <section className='page container'>
            <h2 className='page-header'>WOOF!</h2>
            <NavLink to='/gallery'>
                <button className='link-btn' >Check out my mementos!</button>
            </NavLink>
            <section>
                <img src={babyMarty} alt='Marty the dog' />
            </section>
            <h5 className='page-header'>Working dogs run on coffee and donuts!! 🥰</h5>
        </section>
    )
}