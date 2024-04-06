import { useState } from 'react'

import { photosArray } from '../assets/PhotoDump'

import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import { NavLink } from 'react-router-dom'


export default function FullGallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section className='page'>

      <h1 className='page-header page-header-text'>Full Gallery</h1>
      <div className='near-footer'>
        <PhotoAlbum
          layout="columns"
          photos={photosArray}
          onClick={({ index: current }) => setIndex(current)} />
        <Lightbox
          index={index}
          slides={photosArray}
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
