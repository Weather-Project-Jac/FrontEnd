import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CustomAlertProps, CustomAlert } from './CustomAlert.tsx';
import axiosConf from '../axios/axiosConf.ts';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ChangePasswordProps {
  open: boolean;
  onClose: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ open, onClose }) => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [alert, setAlert] = useState<CustomAlertProps>({ message: null, severity: null, handleClose: () => { } });

  const handleCloseDialog = () => {
    onClose();
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePasswordChange = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setAlert({ message: 'Please fill out all fields', severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      return;
    }
    if (newPassword !== confirmPassword) {
      setAlert({ message: 'The new Passwords do not match', severity: 'error', handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      return;
    }
    /* check old password */

    const result = await axiosConf.post('/auth/change-password', { oldPassword, newPassword });
    if(result.status === 200) {
      setAlert({ message: 'Password changed successfully', severity: 'success', handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      handleCloseDialog();
    } else {
      setAlert({ message: 'An error occurred while changing the password', severity: 'error', handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      console.log(result);
    }
  };

  return (
    <>
      <CustomAlert message={alert.message} severity={alert.severity} handleClose={alert.handleClose} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="change-password-dialog-description"
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText id="change-password-dialog-description">
            Please enter your old password and your new password below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handlePasswordChange}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePassword;
