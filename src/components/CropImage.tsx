const getCroppedImg = async (imageSrc: string, pixelCrop: any, width: number, height: number) => {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx?.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    width,
    height
  );
  return canvas.toDataURL('image/jpeg');
};

export default getCroppedImg;
