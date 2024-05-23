
import PopularSwiper from '../components/PopularSwiper'
import TraySwiper from '../components/TraySwiper'
import CoasterSwiper from '../components/CoasterSwiper'
import MiscSwiper from '../components/MiscSwiper'
import { NavLink } from 'react-router-dom'



export default function Gallery() {

  return (
    <section className='page'>
      <h1 className='page-header page-header-text'>Mementos Gallery</h1>
      <h2 className='page-header'>More Mementos coming soon!</h2>

      <PopularSwiper />
      <TraySwiper />
      <CoasterSwiper />
      <MiscSwiper />

      <NavLink to='full'>
        <button className='link-btn' >See Full Gallery </button>
      </NavLink>
      <NavLink to='/contact'>
        <button className='link-btn' >Interested?</button>
      </NavLink>
    </section>
  );
}
