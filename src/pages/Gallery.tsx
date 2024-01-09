import React, { useState, useEffect } from 'react';
import FillerText from "../components/FillerText";
import { Gallery } from "react-grid-gallery";
import { getPhotos, photoArray } from "../assets/PhotoDump";

export default function PhotoGallery() {
    const [photos, setPhotos] = useState(photoArray);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPhotos().then(() => {
            setPhotos(photoArray);
            setLoading(false);
        });
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <h1>Gallery of past projects </h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Gallery images={photos} />
            )}
            <FillerText />
        </>
    );
}
