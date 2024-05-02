import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export interface CustomAlertProps {
    message: string | null;
    severity: 'error' | 'success' | 'info' | 'warning' | null;
    handleClose: (() => void);
}

export const CustomAlert: React.FC<CustomAlertProps> = ({ message, severity, handleClose }) => {
    if (!message || !severity) return null;
    const open = message !== null && severity !== null;
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
