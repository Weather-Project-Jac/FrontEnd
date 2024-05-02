import { Button, Avatar,ChangeEvent  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ChangeEvent, CSSProperties } from 'react';
import { UserStore } from '../store/store.ts';
import AvatarEditor from 'react-avatar-editor';
import { useRef, useState } from 'react';

interface AvatarPickerProps {
  setSelectedAvatar: (avatar: string) => void;
  selectedAvatar: string;
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({ setSelectedAvatar, selectedAvatar }) => {
  const editorRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState<number>(1);

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

  // const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedAvatar(reader.result as string);
  //       UserStore.setState({ avatar: selectedAvatar });
  //       /* axios save */
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedAvatar(URL.createObjectURL(file));
    }
  };

  const handleCrop = () => {
    if (editorRef.current) {
      const canvasScaled = editorRef.current.getImageScaledToCanvas().toDataURL();
      setSelectedAvatar(canvasScaled);
      UserStore.setState({ avatar: canvasScaled });
    }
  };


  return (
    // <div style={containerStyle}>
    //   <div style={avatarContainerStyle}>
    //     <Avatar src={selectedAvatar} sx={{
    //       width: 220,
    //       height: 220,
    //       margin: 'auto'
    //     }} />
    //     <input
    //       type="file"
    //       accept="image/*"
    //       onChange={handleAvatarChange}
    //       style={{ display: 'none' }}
    //       id="avatar-upload-input"
    //     />
    //     <label htmlFor="avatar-upload-input">
    //       <EditIcon style={editIconStyle} fontSize="small" />
    //     </label>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       disabled={!selectedAvatar}
    //       style={{ display: 'none' }}
    //       id="avatar-upload-button"
    //     >
    //       Upload Avatar
    //     </Button>
    //   </div>
    // </div>
    <div style={containerStyle}>
      <div style={avatarContainerStyle}>
        <AvatarEditor
          ref={editorRef}
          image={selectedAvatar}
          width={220}
          height={220}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={scale}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
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
          onClick={handleCrop}
          style={{ display: 'block' }}
          id="avatar-upload-button"
        >
          Crop Image
        </Button>
        <Button onClick={() => setScale(scale + 0.1)}>Zoom In</Button>
        <Button onClick={() => setScale(scale - 0.1)}>Zoom Out</Button>
      </div>
    </div>
  );
};

export default AvatarPicker;

// import React, { useRef, useState, ChangeEvent } from 'react';
// import AvatarEditor from 'react-avatar-editor';
// import { Button, Avatar } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import { UserStore } from '../store/store.ts';

// interface AvatarPickerProps {
//   setSelectedAvatar: (avatar: string) => void;
//   selectedAvatar: string;
// }

// const AvatarPicker: React.FC<AvatarPickerProps> = ({ setSelectedAvatar, selectedAvatar }) => {
//   const editorRef = useRef<AvatarEditor | null>(null);
//   const [scale, setScale] = useState<number>(1);

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//   };

//   const avatarContainerStyle = {
//     position: 'relative',
//     display: 'inline-block',
//   };

//   const editIconStyle = {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     transform: 'translate(50%, 50%)',
//     borderRadius: '50%',
//     cursor: 'pointer',
//   };

//   const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedAvatar(URL.createObjectURL(file));
//     }
//   };

//   const handleCrop = () => {
//     if (editorRef.current) {
//       const canvasScaled = editorRef.current.getImageScaledToCanvas().toDataURL();
//       setSelectedAvatar(canvasScaled);
//       UserStore.setState({ avatar: canvasScaled });
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={avatarContainerStyle}>
//         <AvatarEditor
//           ref={editorRef}
//           image={selectedAvatar}
//           width={220}
//           height={220}
//           border={50}
//           color={[255, 255, 255, 0.6]} // RGBA
//           scale={scale}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileSelect}
//           style={{ display: 'none' }}
//           id="avatar-upload-input"
//         />
//         <label htmlFor="avatar-upload-input">
//           <EditIcon style={editIconStyle} fontSize="small" />
//         </label>
//         <Button
//           variant="contained"
//           color="primary"
//           disabled={!selectedAvatar}
//           onClick={handleCrop}
//           style={{ display: 'block' }}
//           id="avatar-upload-button"
//         >
//           Crop Image
//         </Button>
//         <Button onClick={() => setScale(scale + 0.1)}>Zoom In</Button>
//         <Button onClick={() => setScale(scale - 0.1)}>Zoom Out</Button>
//       </div>
//     </div>
//   );
// };

// export default AvatarPicker;
