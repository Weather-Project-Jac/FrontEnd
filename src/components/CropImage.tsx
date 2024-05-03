const getCroppedImg = async (imageSrc: string, pixelCrop: any, width: number, height: number) => {
  const image = new Image();
  image.src = imageSrc;
  console.log(image)

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

  return new Promise<string>((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      console.log(blob);
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
};

export default getCroppedImg;
