import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { photosArray } from '../assets/PhotoDump'

import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'


export default function FullGallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section className='page'>

      <h1 className='page-header page-header-text'>Full Gallery</h1>
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

    </section>
  );
}
