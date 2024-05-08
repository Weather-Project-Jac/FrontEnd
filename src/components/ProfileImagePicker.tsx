import React, { ChangeEvent, CSSProperties, useState } from 'react';
import { Button, Avatar, Modal, Slider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage.tsx';
import { UserStore } from '../store/store';
import axiosConf from '../axios/axiosConf.ts';
import { CustomAlert, CustomAlertProps } from './CustomAlert.tsx';

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
  const [alert, setAlert] = useState<CustomAlertProps>({ message: '', severity: 'success', handleClose: () => { }});

/*   useEffect(() => {
    console.log(croppedImage);
  }, [croppedImage]); */

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


      const result = await axiosConf.post('/user/update', { profile_image_url: croppedAvatar, mail: UserStore.getState().email });
      if(result.status === 200) {
        console.log('Avatar updated');  
        setSelectedAvatar(croppedAvatar);
        UserStore.setState({ avatar: croppedAvatar || "test" });
        setShowModal(false);
      } else {
        console.log('Error updating avatar');
        setAlert({ message: 'Error updating avatar', severity: 'error', handleClose: () => setAlert({ message: '', severity: 'success', handleClose: () => { }}) });
      }

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
        <div style={{ maxWidth: '70%', margin: '0 auto' }}>
          <div style={{ position: 'relative', width: '100%', height: "75vh" }}>
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
      <CustomAlert {...alert} />
    </>
  );
};

export default AvatarPicker;
