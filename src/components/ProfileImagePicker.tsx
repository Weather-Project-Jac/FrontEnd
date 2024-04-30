import { Button, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ChangeEvent, CSSProperties } from 'react';
import { UserStore } from '../store/store.ts';

interface AvatarPickerProps {
  setSelectedAvatar: (avatar: string) => void;
  selectedAvatar: string;
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({ setSelectedAvatar, selectedAvatar }) => {
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
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedAvatar(reader.result as string);
        UserStore.setState({ avatar: selectedAvatar });
        /* axios save */
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={avatarContainerStyle}>
        <Avatar src={selectedAvatar} sx={{ width: 100, height: 100 }} />
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
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedAvatar}
          style={{ display: 'none' }}
          id="avatar-upload-button"
        >
          Upload Avatar
        </Button>
      </div>
    </div>
  );
};

export default AvatarPicker;
