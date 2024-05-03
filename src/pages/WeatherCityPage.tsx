import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  List,
  ListItem,
  Avatar,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import icons from "../assets/icons/index.ts";
import axios from "../axios/axiosConf.ts";
import { useLocation, useNavigate } from "react-router-dom";

function WeatherCityPage() {

  const location = useLocation();
  const navigate = useNavigate();
  const getCity = location.state?.city;
  const getCountryCode = location.state?.countryCode;
  const [city, setCity] = React.useState(getCity);
  const [weather, setWeather] = React.useState({} as any);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchWeather() {
      try {
        // const response = await axios.get(`/weather/${city}/${getCountryCode}`);
        // console.log(response);
        /* setWeather(response.data);
        setLoading(false); */
      } catch (error) {
        console.error(error);
        //navigate("/");
      }
    }
    fetchWeather();
  }, [city]);
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
        <LeftCard city={city} WeatherInfo={[]} />

        <Grid item xs={12} sm={7} >
          <Card style={{ backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <List sx={{ px: 2 }} >
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((item, index) => (

                <ListItem key={index} alignItems="flex-start" style={{ width: '100%', backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)' }} sx={{ my: 2 }}>


                  <Avatar src={icons.thunderstorm} sx={{
                    pr: 2,
                    width: "10%",
                    height: "10%",
                    minHeight: isSmallScreen ? "50px" : "0",
                    minWidth: isSmallScreen ? "50px" : "0",
                    marginRight: 0,
                  }} />
                  <ListItemText

                    primary={`${item} 13 June`}
                    secondary="Thunderstorm"
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
                  <Grid item xs={7} textAlign='center'>
                    <Grid container spacing={2}>
                      {["iconThermometer", "iconWind", "iconCloud", "iconHumidity"].map((item: string) => (
                        <Grid item xs={6} md={6} display={"flex"} key={item} justifyContent={"center"} alignItems={"center"}>
                          <Box
                            component='img'
                            src={icons[item]}
                            sx={{
                              maxWidth: isSmallScreen ? 20 : 35,
                              marginLeft: "25%",
                            }}
                          />
                          <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={500} marginBottom={0} marginLeft="10%">
                            30%
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
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
