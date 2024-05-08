import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
} from "@mui/material";

import icons from "../assets/icons";
import { UserStore } from "../store/store";
import axiosConf from "../axios/axiosConf";
import React, { useEffect } from "react";

function HomePage() {
    const favoriteCities = UserStore((state) => state.favoriteCities);
    const [weather, setWeather] = React.useState<any>([]);

    useEffect(() => {
        const fetchWeatherForCities = async () => {
            try {
                const citiesWeatherPromises = favoriteCities.map(async (city) => {
                    const response = await axiosConf.get(`/weather/${city.city}/${city.countryCode}/${city.stateCode}`);
                    if (response.status !== 200) {
                        console.log(response);
                        return null;
                    }
                    const result = response.data.filter((item) => item.hour.split(":")[0] === new Date().getHours().toString().padStart(2, "0"))[0];
                    return { city, temperature: result ? result.data.temperature80m : null };
                });

                const citiesWeatherData = await Promise.all(citiesWeatherPromises);
                const filteredWeatherData = citiesWeatherData.filter(weather => weather !== null);

                setWeather(filteredWeatherData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherForCities();
    }, [favoriteCities]);


    return (
        <Container maxWidth='xl' >
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0 }}
            >
                <Grid item sm={11} style={{ paddingLeft: 0 }}>
                    <Grid container spacing={10} style={{ paddingTop: 50, paddingLeft: 30 }} alignItems="center" display={'flex'} justifyContent={'center'} >
                        {weather && weather.map((item, key) => (
                            <Grid item xs={12} sm={3} key={key} alignItems={"center"}>
                                <Card style={{ color: 'white', backgroundColor: '#1D2837', borderRadius: '15px', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', cursor: 'pointer' }}>
                                    <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            textAlign: 'center',
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 600
                                        }}>
                                            {item.city.city} - {item.city.countryCode}
                                        </Typography>
                                        <Box
                                            component='img'
                                            sx={{
                                                width: '70%',
                                                margin: 'auto',
                                            }}
                                            src={icons.clear} />
                                        <Typography variant="body1" color="white" sx={{
                                            pl: 1,
                                            textAlign: 'center',
                                            fontSize: 30,
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 600
                                        }}>
                                            {item.temperature} °C
                                        </Typography>
                                        <Typography variant="body1" color="white" sx={{
                                            textAlign: 'center',
                                            fontSize: 20,
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 300
                                        }}>
                                            Sunny
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </Container >
    );
}

export default HomePage;