import React, { useRef, useEffect, useState } from 'react';
import { Typography, Container, Card, CardContent, Grid, Box, Paper, useMediaQuery, useTheme, Alert, Button } from '@mui/material';
//import { Link } from 'react-router-dom';
import { UserStore } from '../store/store.ts';
import axiosConfig from "../axios/axiosConf.ts";
import axios from "axios"
import icons from '../assets/icons/index.ts';

const HomePage: React.FC = () => {
    const lastSearchedCities = UserStore((state) => state.lastSearchedCities);
    // Dummy current date and position
    const currentDate = new Date();
    const [currentPosition, setCurrentPosition] = useState<{ latitude: number; longitude: number, city: string, countrycode: string } | null>(null);
    const [currentTemperature, setCurrentTemperature] = useState<number | null>(null);
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



    useEffect(() => {
        async function fetchTemperature() {
            if (currentPosition) {
                try {
                    const response = await axiosConfig.get(`/weather/${currentPosition.city}/${currentPosition.countrycode.toUpperCase()}`);
                    const temperature = response.data[currentDate.getHours()].data.temperature80m;
                    setCurrentTemperature(temperature);
                } catch (error) {
                    console.error('There was a problem with the request:', error);
                    setCurrentTemperature(null);
                }
            }
        }
        fetchTemperature();
    }, [currentPosition?.city && currentPosition.countrycode && currentDate.getHours()]);

    async function success(position: GeolocationPosition) {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;

        const GEOCODING = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
            const response = await axios.get(GEOCODING);
            const cityName = response.data?.address?.city || response.data?.address?.town || response.data?.address?.county;
            const getCountryCode = response.data?.address?.country_code;
            setCurrentPosition({ latitude, longitude, city: cityName, countrycode: getCountryCode });
        } catch (error) {
            console.error('There was a problem with the request:', error);
            setCurrentPosition({ longitude: NaN, latitude: NaN, city: "Undefined", countrycode: "Undefined" });
        }
    }

    function error() {
        console.error('Undefined');
        setCurrentPosition({ longitude: NaN, latitude: NaN, city: "Undefined", countrycode: "Undefined" });
    }

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ color: "white", textAlign: "center" }}>
            <Container maxWidth="md" sx={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column" }} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Typography variant="h4" gutterBottom sx={{ paddingBottom: 5, paddingTop: 2 }}>
                    Welcome to Our Weather App!
                </Typography>
                <Grid item sx={{ borderRadius: 5, backgroundColor: '#1d2837', boxShadow: '12px 10px 10px rgba(0,0,0, .2)', paddingY: 2 }} style={{ display: "flex", justifyContent: "space-evenly", flexDirection: isSmallScreen ? "column" : "row" }}>
                    <Grid item xs={isSmallScreen ? 12 : 4} style={{ textAlign: "center", paddingLeft: 0 }}>
                        <Typography variant="h6">Current Day</Typography>
                        <Typography style={{
                            fontSize: 30,
                            fontWeight: 600
                        }}>{currentDate.toLocaleDateString()}</Typography>
                    </Grid>
                    <Grid item xs={isSmallScreen ? 12 : 4} style={{ textAlign: "center", paddingLeft: 0 }}>
                        <Typography variant="h6">Current Temperature</Typography>
                        <Typography style={{
                            fontSize: 30,
                            fontWeight: 600
                        }}>
                            {currentTemperature ? currentTemperature + "°C" : "Getting Data..."}
                        </Typography>
                    </Grid>
                    <Grid item xs={isSmallScreen ? 12 : 4} style={{ textAlign: "center", paddingLeft: 0 }}>
                        <Typography variant="h6">Current Position</Typography>
                        <Typography style={{
                            fontSize: 30,
                            fontWeight: 600
                        }}>{currentPosition && currentPosition.city !== null ? currentPosition.city : "Getting Data..."}</Typography>
                    </Grid>
                </Grid>
                {lastSearchedCities.length > 0 && (
                    <>
                        <Typography variant="h6" gutterBottom style={{ paddingTop: 50 }}>
                            Latest Searched Cities By You:
                        </Typography>
                        <Grid container spacing={2}>
                            {lastSearchedCities.map((city, index) => (
                                <Grid item xs={isSmallScreen ? 12 : 4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                                    {/* <Link to={`/weather/${city}`} style={{ textDecoration: 'none' }}> */}
                                    <Card style={{ backgroundColor: '#1d2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .2)', cursor: 'pointer', width: 500 }}>
                                        <CardContent style={{ paddingBottom: 16 }} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                                            <Typography variant="h5" >
                                                {city}
                                                <Typography variant="body1" sx={{ fontSize: 30 }}>
                                                    23°C {/* Temperatura */}
                                                </Typography>
                                            </Typography>
                                            <img src={icons.thunder} style={{ width: 70 }} />

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
                    backgroundColor: '#132E32',
                    position: 'fixed',
                    bottom: 0,
                }}
                component="footer"
                square
                variant="outlined"
            >
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingY: 1 }}>
                        <img src="/Logo.png" width={45} height={45} alt="Logo" style={{ marginRight: 10 }} />
                        <Typography variant="caption" color="white">
                            Copyright ©2024. [Made by US] Limited
                        </Typography>
                    </Box>
                </Container>

            </Paper>
        </div >
    );
};

export default HomePage;
