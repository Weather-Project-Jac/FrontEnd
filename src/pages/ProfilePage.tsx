import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import { UserStore } from '../store/store.ts';
import ChangePassword from '../components/ChangePassword.tsx';
import AvatarPicker from '../components/ProfileImagePicker.tsx';

const Profile: React.FC = () => {
    const user = UserStore((state) => state);
    console.log(user);

    if (!user.isLogged) {
        return (
            <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>
                <Typography variant="h4">Please log in to view your profile</Typography>
            </div>
        );
    }

    const [showChangePassword, setShowChangePassword] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Profile
                        </Typography>
                        <AvatarPicker
                            setSelectedAvatar={setSelectedAvatar}
                            selectedAvatar={selectedAvatar}
                        />
                        <Typography variant="h6" gutterBottom mt={2}>
                            Username: {user.username || 'Not set'}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Email: {user.email || 'Not set'}
                        </Typography>
                        <Button variant="contained" onClick={() => setShowChangePassword(!showChangePassword)} fullWidth>
                            Change Password
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            <ChangePassword open={showChangePassword} onClose={() => setShowChangePassword(false)} />
        </Grid>
    );
};

export default Profile;
