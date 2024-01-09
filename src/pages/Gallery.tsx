import React, { useState, useEffect } from 'react';
import FillerText from "../components/FillerText";
import { Gallery } from "react-grid-gallery";
import { photoArray } from "../assets/PhotoDump";

export default function PhotoGallery() {
    const [loading, setLoading] = useState(true);

  

    useEffect(() => {
        // Check if the array is filled
        if (photoArray.length > 0) {
            setLoading(false); // Set loading to false if the array is filled
        }
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <h1>Gallery of past projects </h1>
            
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Gallery images={photoArray} />
            )}
            <FillerText />
        </>
    );
}
