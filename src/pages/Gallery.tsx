import React, { useState, useEffect } from 'react'
import FillerText from "../components/FillerText"
import { Gallery } from "react-grid-gallery"
import { getPhotos } from "../assets/PhotoDump"
import { CustomPhoto } from '../assets/PhotoDump'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1)
  const [photos, setPhotos] = useState<CustomPhoto[]>([])
  const [loading, setLoading] = useState(true)

  const currentImage = photos[index]
  const nextIndex = (index + 1) % photos.length
  const nextImage = photos[nextIndex] || currentImage
  const prevIndex = (index + photos.length - 1) % photos.length
  const prevImage = photos[prevIndex] || currentImage
  
  useEffect(() => {
    getPhotos()
      .then((resultPhotos) => {
        setPhotos(resultPhotos)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching photos', error)
        setLoading(false)
      })
  }, []); // Empty dependency array to run the effect only once
  
  const handleClick = (index: number, item: CustomPhoto) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <section className='page'>
      <h2 className='page-header'>Mementos Gallery</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Gallery
            images={photos}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {!!currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.thumbnailCaption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      )}
      <FillerText />
    </section>
  );
}
