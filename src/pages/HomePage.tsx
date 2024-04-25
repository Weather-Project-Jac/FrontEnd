import React, { useRef, useEffect } from 'react';
import { Typography, Container, Card, CardContent, Grid, Box, Paper } from '@mui/material';
//import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const latestCities = ["City 1", "City 2", "City 3", "City 4", "City 5"];
    // Dummy current date and position
    const currentDate = new Date().toDateString();
    const currentPosition = "Your current position";
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (footerRef.current) {
                const footerHeight = footerRef.current.offsetHeight + 10;
                document.body.style.paddingBottom = `${footerHeight}px`;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ color: 'white', paddingTop: 20, textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Welcome to Our Weather App!
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Today's Date: {currentDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Your Current Position: {currentPosition}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
                    Latest Searched Cities By You:
                </Typography>
                <Grid container spacing={2}>
                    {latestCities.map((city, index) => (
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
                            my: 1
                        }}
                    >
                        <div>
                            <img src="/Logo.png" width={50} height={50} alt="Logo" />
                        </div>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            mb: 2,
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
