import React, { useRef, useEffect, useState } from 'react';
import { Typography, Container, Card, CardContent, Grid, Box, Paper } from '@mui/material';
//import { Link } from 'react-router-dom';
import { UserStore } from '../store/store.ts';
import axios from "axios"

const HomePage: React.FC = () => {
    const lastSearchedCities = UserStore((state) => state.lastSearchedCities);
    // Dummy current date and position
    const currentDate = new Date();
    const [currentPosition, setCurrentPosition] = useState<{ latitude: number; longitude: number, city: string } | null>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (footerRef.current) {
                const footerHeight: number = footerRef.current.offsetHeight + 10;
                document.body.style.paddingBottom = `${footerHeight}px`;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }, [currentPosition?.latitude && currentPosition.longitude && currentPosition.city])



    async function success(position: GeolocationPosition) {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        const GEOCODING = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
            const response = await axios.get(GEOCODING);
            console.log(response)
            const cityName = response.data?.address?.city || response.data?.address?.town;
            setCurrentPosition({ latitude, longitude, city: cityName });
        } catch (error) {
            console.error('There was a problem with the request:', error);
            setCurrentPosition({ longitude: NaN, latitude: NaN, city: "Unable to retrieve your location" });
        }
    }

    function error() {
        console.error('Unable to retrieve your location');
        setCurrentPosition({ longitude: NaN, latitude: NaN, city: "Unable to retrieve your location" });
    }

    return (
        <div style={{ color: 'white', paddingTop: 20, textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Welcome to Our Weather App!
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant="h6" gutterBottom>
                            {currentDate.toLocaleDateString()}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6" gutterBottom>
                            Your Current Position: {currentPosition && currentPosition.city !== null ? currentPosition.city : "Getting Data..."}
                        </Typography>

                    </Grid>
                </Grid>
                {lastSearchedCities.length > 0 && (
                    <>
                        <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
                            Latest Searched Cities By You:
                        </Typography>
                        <Grid container spacing={2}>
                            {lastSearchedCities.map((city, index) => (
                                <Grid item xs={12} key={index}>
                                    {/* <Link to={`/weather/${city}`} style={{ textDecoration: 'none' }}> */}
                                    <Card style={{ backgroundColor: '#1d2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .2)', cursor: 'pointer' }}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                {city}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    {/* </Link> */}
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
                {
                    lastSearchedCities.length === 0 && (
                        <Typography variant="h3" gutterBottom style={{ marginTop: 50 }}>
                            Start by looking up a city!
                        </Typography>
                    )
                }
            </Container>
            <Paper
                ref={footerRef}
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(29, 40, 55, 1)',
                    position: 'fixed',
                    bottom: 0,
                }}
                component="footer"
                square
                variant="outlined"
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            my: 0.1
                        }}
                    >
                        <div>
                            <img src="/Logo.png" width={45} height={45} alt="Logo" />
                        </div>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            mb: .5,
                        }}
                    >
                        <Typography variant="caption" color="white">
                            Copyright ©2022. [Made by US] Limited
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </div>
    );
};

export default HomePage;
