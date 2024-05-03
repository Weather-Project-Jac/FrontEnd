import React, { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import { Button, Avatar, Modal, Slider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage.tsx';
import { UserStore } from '../store/store';
interface AvatarPickerProps {
  setSelectedAvatar: (avatar: string) => void;
  selectedAvatar: string;
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({ setSelectedAvatar, selectedAvatar }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  useEffect(() => {
    console.log(croppedImage);
  }, [croppedImage]);

  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  const avatarContainerStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const editIconStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(50%, 50%)',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCroppedImage(reader.result as string);
        setShowModal(true);
      };
      reader.readAsDataURL(file);
      event.target.value = '';
    }
  };

  const handleSaveAvatar = async () => {
    try {
      const croppedAvatar = await getCroppedImg(croppedImage!, croppedAreaPixels, 220, 220);
      console.log('donee', { croppedImage })
      setSelectedAvatar(croppedAvatar);
      UserStore.setState({ avatar: croppedAvatar });
      setShowModal(false);
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={avatarContainerStyle}>
          <Avatar src={selectedAvatar} sx={{
            width: 220,
            height: 220,
            margin: 'auto'
          }} />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
            id="avatar-upload-input"
          />
          <label htmlFor="avatar-upload-input">
            <EditIcon style={editIconStyle} fontSize="small" />
          </label>
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} style={{ paddingTop: 50 }}>
        <div style={{ paddingTop: 20, maxWidth: '90%', margin: '0 auto' }}>
          <h2 style={{ color: 'white', paddingLeft: 50 }}>Crop Image</h2>
          <div style={{ position: 'relative', width: '100%', height: 700 }}>
            <Cropper
              image={croppedImage!}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <Slider
            style={{ width: '80%', margin: '0 auto', display: 'flex' }}
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
            classes={{ root: "slider" }}
          />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleSaveAvatar}>Save Avatar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AvatarPicker;
