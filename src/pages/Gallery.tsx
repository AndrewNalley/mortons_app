import FillerText from "../components/FillerText";
import { Gallery } from "react-grid-gallery";
import { photoArray } from "../assets/PhotoDump";


export default function PhotoGallery() {
    return (
        <>
            <h1>Gallery of past projects </h1>
            <Gallery images={photoArray} />
            <FillerText />
        </>
    );
}