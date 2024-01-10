import React, { useState, useEffect } from 'react'
import FillerText from "../components/FillerText"
import { Gallery } from "react-grid-gallery"
import { getPhotos } from "../assets/PhotoDump"
import Photo from '../assets/PhotoDump'

export default function PhotoGallery() {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState(true)

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
      }, []) // Empty dependency array to run the effect only once

    return (
        <section className='page'>
            <h2 className='page-header'>Mementos Gallery</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Gallery images={photos} />
            )}
            <FillerText />
        </section>
    );
}
