import { useState, useEffect } from 'react'
import FillerText from "../components/FillerText"
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { getPhotos } from "../assets/PhotoDump"
import { Photo } from '../assets/PhotoDump'



export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
// load photos before rendering photo album
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

  return (
    <section className='page'>
      <h2 className='page-header'>Mementos Gallery</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <PhotoAlbum
            layout="rows"
            photos={photos}
            onClick={({ index: current }) => setIndex(current)} />
          <Lightbox
            index={index}
            slides={photos}
            open={index >= 0}
            close={() => setIndex(-1)}
            plugins={[Captions]}
          />
        </div>
      )}
      <FillerText />
    </section>
  );
}
