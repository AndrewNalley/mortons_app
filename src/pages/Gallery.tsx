import FillerText from "../components/FillerText";
import ImageGallery from "react-image-gallery";
import { photoArray } from "../assets/PhotoDump";


export default function Gallery() {
    return (
        <>
            <h1>Gallery of past projects </h1>
            {/* <ImageGallery items={photoArray} />; */}
            <FillerText />
        </>
    );
}