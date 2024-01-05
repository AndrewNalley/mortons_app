interface Photo {
    src: string;
    width: number;
    height: number;
}

const photoArray: Photo[] = [];


const upperLimit = 37;

// Use forEach to loop through the range of images
Array.from({ length: upperLimit }, (_, index) => {
    const photo = require(`../assets/photos/proj-photos/Craft_Lindsey-${String(index + 1).padStart(2, '0')}.jpg`);
    photoArray.push({ src: photo, width: 192, height: 108 });
    return null;
  });

export { photoArray };