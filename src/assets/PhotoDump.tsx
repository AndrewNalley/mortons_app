import exifr from 'exifr'
import { Image } from 'react-grid-gallery'

export interface CustomPhoto extends Image {
  original: string;
}

const upperLimit = 65;

// Use forEach to loop through the range of images
async function getPhotos(): Promise<CustomPhoto[]> {
  const localPhotoArray: CustomPhoto[] = []
  const promises: Promise<void>[] = []

  Array.from({ length: upperLimit }, (_, index) => {
    const photo = require(`../assets/photos/proj-photos/Craft_Lindsey-${String(index).padStart(2, '00')}.jpg`)

    const promise = exifr.parse(photo)
      .then(output => {
        const caption = output ? output.ImageDescription : 'No Comment'
        localPhotoArray.push({ src: photo, original: photo, width: 160, height: 108, thumbnailCaption: caption })
      })
      .catch(error => {
        console.error('Error parsing EXIF data', error)
      });

    promises.push(promise)

    return null
  });

  await Promise.all(promises)
  return localPhotoArray
}

export { getPhotos }
