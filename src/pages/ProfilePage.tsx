import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Container, Divider } from '@mui/material';
import { UserStore } from '../store/store.ts';
import ChangePassword from '../components/ChangePassword.tsx';
import AvatarPicker from '../components/ProfileImagePicker.tsx';

const Profile: React.FC = () => {
    const user = UserStore((state) => state);

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
        <Container style={{ display: 'flex' }}>
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0, marginBottom: 30 }}
            >
                <Grid item xs={12} sm={6} >
                    <Card style={{ backgroundColor: '#1D2837', color: 'white', margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid container rowSpacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                                <Grid item xs={12} style={{ paddingLeft: 0, paddingTop: 50, paddingBottom: 20 }}>
                                    <Typography variant="h4" gutterBottom align="center">
                                        Profile
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ paddingBottom: 1 }}>
                                    <AvatarPicker selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingBottom: 2 }}>
                                    <Typography variant="h6" gutterBottom align="left" style={{ paddingLeft: 20, fontSize: 18, color: "#598A42", marginBottom: 0 }}>
                                        Username
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="left" style={{ paddingLeft: 30, fontSize: 25 }}>
                                        {user.username}
                                    </Typography>
                                    <Divider variant='middle' sx={{ backgroundColor: 'white' }} />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingBottom: 2 }}>
                                    <Typography variant="h6" gutterBottom align="left" style={{ paddingLeft: 20, fontSize: 18, color: "#598A42", marginBottom: 0 }}>
                                        Email
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="left" style={{ paddingLeft: 30, fontSize: 25, wordWrap: 'break-word' }}>
                                        {user.email}
                                    </Typography>
                                    <Divider variant='middle' sx={{ backgroundColor: 'white' }} />
                                </Grid>
                                <Grid container justifyContent={'center'} paddingTop={5} paddingBottom={2}>
                                    <Button style={{ fontSize: 25, color: 'white', backgroundColor: '#176087', padding: '2% 3%' }} onClick={() => setShowChangePassword(true)}>CHANGE PASSWORD</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <ChangePassword open={showChangePassword} onClose={() => setShowChangePassword(false)} />
        </Container >
    );
};

export default Profile;
