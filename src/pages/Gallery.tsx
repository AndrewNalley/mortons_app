
import PopularSwiper from '../components/PopularSwiper'
import TraySwiper from '../components/TraySwiper'
import CoasterSwiper from '../components/CoasterSwiper'
import MiscSwiper from '../components/MiscSwiper'
import { NavLink } from 'react-router-dom'



export default function Gallery() {

  return (
    <section className='page'>
      <h1 className='page-header page-header-text'>Mementos Gallery</h1>

      <PopularSwiper />
      <TraySwiper />
      <CoasterSwiper />
      <MiscSwiper />

      <NavLink to='full'>
        <h4 className='link-btn' >See the Full Gallery </h4>
      </NavLink>
    </section>
  );
}
