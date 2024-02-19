
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


      <span>
        <NavLink to='full'>See the Full Gallery</NavLink>
      </span>
    </section>
  );
}
