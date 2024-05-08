import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  List,
  ListItem,
  ListItemText,
  CardContent,
  Stack,
  useMediaQuery,
  useTheme
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import axios from "../axios/axiosConf.ts";
import { useLocation } from "react-router-dom";
import { WeatherIcon, getStringFromNumber, WeatherNames } from "../components/WeatherIcon";
import { ThreeDots } from "react-loader-spinner";
import Graph from "../components/GraphInfo.tsx";

function WeatherCityPage() {

  const location = useLocation();
  const [city, setCity] = React.useState<string>("");
  const [countryCode, setcountryCode] = React.useState<string>("");
  const [stateCode, setstateCode] = React.useState<string>("");
  const [weather, setWeather] = React.useState({} as any);
  const [todayWeather, setTodayWeather] = React.useState([] as any[]);
  const [weekWeather, setWeekWeather] = React.useState([] as any[]);

  React.useEffect(() => {
    async function fetchWeather() {
      setWeekWeather([]);
      try {
        const response = await axios.get(`/weather/${city}/${countryCode}/${stateCode}`);
        if (response.status !== 200) {
          //navigate("/");
          console.log(response)
          return;
        }
        setTodayWeather(response.data);
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
        for (let i = 0; i < 7; i++) {
          /* data from response.data  "05-08"*/
          const date = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
          response2.data.filter((item) => {
            const splitDate = date.split("-");
            const onlyDate = splitDate[1] + "-" + splitDate[2];
            if (item.date === onlyDate) {
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
  }, [city, countryCode, stateCode, setWeekWeather]);

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

  function getUniqueValues(array) {
    let setObj = new Set(array.map(JSON.stringify));
    return Array.from(setObj).map(JSON.parse);
  }
  

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
              {weekWeather.length == 0 ?
                <ThreeDots

                  visible={true}
                  height="45"
                  color="#176087"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ display: "flex", justifyContent: "center" }}
                />
                : <>
                  {weekWeather.slice(1).map((item, index) => (

                    <ListItem key={index} alignItems="flex-start" style={{ width: '100%', backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', alignItems: 'center' }} sx={{ my: 2 }}>

                      <div style={{ maxHeight: 200, maxWidth: 200, marginRight: isSmallScreen ? '0' : "20%", marginLeft: isSmallScreen ? '-20%' : 'auto' }}>
                        <WeatherIcon weatherCode={item?.data?.weatherCode} />
                      </div>
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
                </>
              }

            </List>
          </Card>
        </Grid>
        <Grid container spacing={3} justifyContent="center" p={4}>
          {weekWeather.length > 0 && (
            <Grid item xs={12} sm={6} md={6}>
              <Card
                style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)' }}
              >
                <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Stack
                    direction="row"
                    sx={{ width: "100%", marginBottom: "10px", justifyContent: "center" }}
                  >
                      <Graph data={getUniqueValues(weekWeather).map(item => ((item?.data?.temperatureMin + item?.data?.temperatureMax) / 2).toFixed(2))} />
                  </Stack>
                  <Typography variant="h5" component="h2" textAlign="center">
                    Temperature Trend (Last 7 days)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
          {todayWeather.length > 0 && (
            <Grid item xs={12} sm={6} md={6}>
                {console.log(getUniqueValues(todayWeather))}

              <Card
                style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)' }}
              >
                <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Stack
                    direction="row"
                    sx={{ width: "100%", marginBottom: "10px", justifyContent: "center" }}
                  >
                     <Graph data={getUniqueValues(todayWeather).map(item => item?.data?.apparentTemperature)}/>
                  </Stack>
                  <Typography variant="h5" component="h2" textAlign="center">
                    Temperature Trend (Today)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>

    </Container >
  );
}

export default WeatherCityPage;
