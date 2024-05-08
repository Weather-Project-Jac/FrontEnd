import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import icons from "../assets/icons/index.ts";
import axios from "../axios/axiosConf.ts";
import { useLocation } from "react-router-dom";
import { WeatherIcon, getStringFromNumber, WeatherNames } from "../components/WeatherIcon";

function WeatherCityPage() {

  const location = useLocation();
  const [city, setCity] = React.useState<string>("");
  const [countryCode, setcountryCode] = React.useState<string>("");
  const [stateCode, setstateCode] = React.useState<string>("");
  const [weather, setWeather] = React.useState({} as any);
  const [weekWeather, setWeekWeather] = React.useState([] as any[]);

  React.useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(`/weather/${city}/${countryCode}/${stateCode}`);
        if (response.status !== 200) {
          //navigate("/");
          console.log(response)
          return;
        }
        const data = response.data.filter((item) => item.hour.split(":")[0] === new Date().getHours().toString().padStart(2, "0"))[0];
        if (data) {
          setWeather(data);
          //console.log(data);
        }
        const date = new Date().toISOString().split("T")[0];
        const weekLaterDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
        const response2 = await axios.get(`/weather/${city}/${countryCode}/${stateCode}/${date}/${weekLaterDate}`);
        if (response2.status !== 200) {
          //navigate("/");
          console.log(response2)
          return;
        }
        for (let i = 1; i < 7; i++) {
          /* data from response.data  "05-08"*/
          const date = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
          response2.data.filter((item) => {
            const splitDate = date.split("-");
            const onlyDate = splitDate[1] + "-" + splitDate[2];
            if (item.date === onlyDate) {
              console.log(item)
              setWeekWeather((prev) => [...prev, item]);
            }
          })
        }
      } catch (error) {
        console.error(error);
        //navigate("/");
      }
    }
    if (city)
      fetchWeather();
  }, [city, countryCode, stateCode]);

  React.useEffect(() => {
    // console.log(location)
    if (location.state?.city && location.state?.countryCode && location.state?.stateCode) {

      if (location.state?.stateCode === "Trentino-South Tyrol") {
        setstateCode("Trentino-Alto Adige")
      } else
        setstateCode(location.state?.stateCode);

      setCity(location.state?.city);
      setcountryCode(location.state?.countryCode);

      console.log(location.state?.city, location.state?.countryCode, location.state?.stateCode)
    }
  }, [location.state]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" style={{ display: 'flex' }}>
      <Grid
        container
        justifyContent="space-around"
        spacing={4}
        alignContent="center"
        style={{ marginTop: 0, marginBottom: 30 }}
      >
        <LeftCard city={city} countryCode={countryCode} stateCode={stateCode} WeatherInfo={weather.data} />

        <Grid item xs={12} sm={7} >
          <Card style={{ backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <List sx={{ px: 2 }} >
              {weekWeather.map((item, index) => (

                <ListItem key={index} alignItems="flex-start" style={{ width: '100%', backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)' }} sx={{ my: 2 }}>

                  <WeatherIcon weatherCode={item?.data?.weatherCode} />
                  <ListItemText

                    primary={new Date(new Date().getFullYear() + "-" + item?.date).toDateString()}
                    secondary={WeatherNames[getStringFromNumber(item?.data?.weatherCode) as keyof typeof WeatherNames]}
                    sx={{
                      '.MuiListItemText-primary': {
                        color: 'white',
                        fontSize: 20,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600
                      },
                      '.MuiListItemText-secondary': {
                        color: 'white',
                        fontSize: 15,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300
                      }
                    }}
                  />
                </ListItem>
              ))}

            </List>
          </Card>
        </Grid>
      </Grid>
    </Container >
  );
}

export default WeatherCityPage;
