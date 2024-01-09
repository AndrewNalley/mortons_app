import exifr from 'exifr'

interface Photo {
    src: string;
    width: number;
    height: number;
    caption?: string;
}


const photoArray: Photo[] = [];


const upperLimit = 65;

// Use forEach to loop through the range of images
Array.from({ length: upperLimit }, (_, index) => {
    const photo = require(`../assets/photos/proj-photos/Craft_Lindsey-${String(index).padStart(2, '00')}.jpg`);
    exifr.parse(photo)
    .then(output => console.log(output.ImageDescription))
    photoArray.push({ src: photo, width: 192, height: 108 });
    return null;
  });

export { photoArray };