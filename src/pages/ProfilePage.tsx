import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Avatar, Grid, Container, Box } from '@mui/material';
import { UserStore } from '../store/store.ts';
import ChangePassword from '../components/ChangePassword.tsx';
import AvatarPicker from '../components/ProfileImagePicker.tsx';
import icons from "../assets/icons/index.ts";
import usericon from "../assets/user.png";

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
        <Container maxWidth="xl" style={{ display: 'flex' }}>
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0, marginBottom: 30 }}
            >
                <Grid item xs={12} sm={5}>
                    <Card style={{ backgroundColor: '#1D2837', color: 'white', margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid container rowSpacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item xs={12} marginTop={2} marginLeft={2}>
                                    <Typography variant="h4" gutterBottom align="center">
                                        Profile
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Avatar src="/static/images/avatar/2.jpg" sx={{
                                        width: 200,
                                        height: 200,
                                        margin: 'auto',
                                        marginBottom: 10
                                    }} />
                                    {/* <Box
                                        component='img'
                                        sx={{
                                            display: 'block',
                                            width: '55%',
                                            margin: 'auto',
                                        }}
                                        src={usericon} /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={300} fontSize={70} marginBottom={0}>
                                        Clear
                                    </Typography>
                                    <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={900} fontSize={60}>
                                        24°
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} textAlign='center'>
                                    <Grid container spacing={2}>
                                        {["iconThermometer", "iconWind", "iconCloud", "iconHumidity"].map((item) => (
                                            <Grid item xs={6} md={6} display={"flex"} key={item} justifyContent={"space-between"} alignItems={"center"}>
                                                <Box
                                                    component='img'
                                                    src={icons[item.toString()]}
                                                    sx={{
                                                        maxWidth: 50,
                                                        marginLeft: "25%",
                                                    }}
                                                />
                                                <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={900}
                                                    fontSize={20} marginBottom={0} marginRight={"25%"}>
                                                    30%
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
