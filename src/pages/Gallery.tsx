import { useState, useEffect } from 'react'

import { photosArray } from '../assets/PhotoDump'

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";





export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [featuredIndex, setfeaturedIndex] = useState(-1);

  const featuredArray = [
    photosArray[5],
    photosArray[7],
    photosArray[14],
    photosArray[19],
    photosArray[25],
    photosArray[28],
    photosArray[30],
    photosArray[31],
    photosArray[32],
    photosArray[34],
    photosArray[35],
    photosArray[36],
    photosArray[38],
    photosArray[39]
  ]

  return (
    <section className='page'>
      <h2 className='page-header'>Mementos Gallery</h2>
      <PhotoAlbum
            layout="rows"
            photos={featuredArray}
            onClick={({ index: current }) => setfeaturedIndex(current)} />
          <Lightbox
            index={featuredIndex}
            slides={featuredArray}
            open={featuredIndex >= 0}
            close={() => setfeaturedIndex(-1)}
            plugins={[Captions]}
          />

      <h2 className='page-header'>Full Gallery</h2>
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
          />
    </section>
  );
}
