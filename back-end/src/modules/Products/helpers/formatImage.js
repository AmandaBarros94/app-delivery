const formatImageUrl = (rawImage) => {
    const splittedImage = rawImage.split('/');
    const splittedImageLength = splittedImage.length;
  
    const imageName = splittedImage[splittedImageLength - 1];
  
    return imageName;
  };
  
  module.exports = formatImageUrl;
