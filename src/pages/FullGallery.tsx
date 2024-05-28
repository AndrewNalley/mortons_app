import { useEffect, useState } from 'react'
import { Product } from '../types'
import { photosArray } from '../assets/PhotoDump'
import supabaseProducts from '../assets/supabaseProducts'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import { NavLink } from 'react-router-dom'


export default function FullGallery() {
  const [index, setIndex] = useState(-1)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


useEffect(() => {
  const fetchProducts = async () => {
      try {
          const productsArray = await supabaseProducts();
          setProducts(productsArray);
      } catch (err) {
          setError('Failed to fetch products.');
      } finally {
          setLoading(false);
      }
  };

  fetchProducts();
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;


  return (
    <section className='page'>

      <h1 className='page-header page-header-text'>Full Gallery</h1>
      <h2 className='page-header'>More Mementos coming soon!</h2>
      <div className='near-footer'>
        <PhotoAlbum
          layout="columns"
          photos={products.map((photo, idx) => ({ src: photo.src, width: 192, height: 108, key: `${photo.src}-${idx}` }))}
          onClick={({ index: current }) => setIndex(current)} />
        <Lightbox
          index={index}
          slides={products}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Captions]}
          aria-busy="true"
        />
      </div>
      <NavLink to='/'>
        <button className='link-btn' >Back to Home</button>
      </NavLink>
      <NavLink to='/contact'>
        <button className='link-btn' >Special Request?</button>
      </NavLink>

    </section>
  );
}
