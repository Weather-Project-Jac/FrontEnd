import {
    Typography,
    Grid,
    Box,
    Card,
    CardContent
} from "@mui/material";
import icons from '../assets/icons/index.ts';
import React, { useEffect } from 'react';
import Heart from "react-animated-heart";
import { UserStore } from "../store/store.ts";
import axiosInstance from "../axios/axiosConf.ts";

interface LeftCardProps {
    city: string;
    stateCode: string;
    countryCode: string;
    WeatherInfo: any;
}


const LeftCard: React.FC<LeftCardProps> = ({ city, WeatherInfo, countryCode, stateCode }) => {
    console.log(city, countryCode, stateCode)
    const { favoriteCities, toggleFavouritesCities, checkFavourite } = UserStore();
    const [isClick, setClick] = React.useState(false);
    const isLogged = UserStore((state) => state.isLogged);

    useEffect(() => {
        setClick(checkFavourite({ city, stateCode, countryCode }));
    }, [checkFavourite, city, countryCode, stateCode])

    const handleFavourite = async (city: object) => {
        toggleFavouritesCities(city);
        setClick(!isClick);
        console.log(favoriteCities)
        const result = await axiosInstance.post('/user/update', { favorites: favoriteCities, mail: UserStore.getState().email })
        console.log(result.status)
        if (result.status !== 200) {
            toggleFavouritesCities(city);
        }
    };
    return (
        <Grid item xs={12} sm={5} >
            <Card style={{ backgroundColor: '#1D2837', color: 'white', margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%' }} >
                <CardContent style={{ display: 'flex', flexDirection: 'column' }}>

                    <Grid container rowSpacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                        <Grid item marginLeft={3}>
                            <Typography variant="h4" gutterBottom align="left">
                                {city}
                            </Typography>
                        </Grid>
                        <Grid item marginLeft={3}>
                            <Typography variant="h6" gutterBottom align="center">
                                {new Date().toLocaleDateString()}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography style={{ padding: 0, margin: 0 }} variant="h6" gutterBottom align="center">
                                {
                                    isLogged ?
                                        <Heart isClick={isClick} onClick={() => handleFavourite({ city, stateCode, countryCode })} />
                                        : null
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                component='img'
                                sx={{
                                    display: 'block',
                                    width: '55%',
                                    margin: 'auto',
                                }}
                                src={icons.thunderstorm} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={300} fontSize={70} marginBottom={0}>
                                { }
                            </Typography>
                            <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={900} fontSize={60}>
                                {WeatherInfo?.apparentTemperature} °C
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center' >
                            <Grid container spacing={2}>
                                {Object.entries({
                                    "iconThermometer": WeatherInfo?.temperature80m + " °C",
                                    "iconWind": WeatherInfo?.windSpeed + " km/h",
                                    "iconCloud": WeatherInfo?.precipitationProb + " %",
                                    "iconHumidity": WeatherInfo?.relativeHumidity + " %"
                                }).map(([item, value]) => (
                                    <Grid item xs={6} md={6} display="flex" key={item} justifyContent="center" alignItems="center">
                                        <Box
                                            component="img"
                                            src={icons[item]}
                                            sx={{
                                                maxWidth: 50,
                                                // marginLeft: "25%",
                                            }}
                                        />
                                        <Typography variant="body1" gutterBottom textAlign="center" fontFamily="Inter, sans-serif" fontWeight={500} marginBottom={0} marginLeft="10%">
                                            {value}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default LeftCard;
