import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  ListItemText,
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import icons from "../assets/icons/index.ts";

function WeatherCityPage() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex' }}>
      <Grid
        container
        justifyContent="space-around"
        spacing={4}
        alignContent="center"
        style={{ marginTop: 0, marginBottom: 30 }}
      >
        <LeftCard />

        <Grid item xs={12} sm={7} >
          <Card style={{ backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <List sx={{ px: 2 }} >
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((item) => (

                <ListItem alignItems="flex-start" style={{ width: '100%', backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)' }} sx={{ my: 2 }}>

                  <Avatar src={icons.thunderstorm} sx={{
                    pr: 2,
                    pt: 3,
                    width: "10%",
                    height: "10%",
                    marginRight: 0
                  }} />
                  <ListItemText

                    primary={`${item} 13 June`}
                    secondary="Thunderstorm"
                    sx={{
                      mt: 3,
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
                      {["iconThermometer", "iconWind", "iconCloud", "iconHumidity"].map((item) => (
                        <Grid item xs={6} md={6} display={"flex"} key={item} justifyContent={"space-between"} alignItems={"center"}>
                          <Box
                            component='img'
                            src={icons[item.toString()]}
                            sx={{
                              maxWidth: 35,
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
                  {/* <ListItemSecondaryAction>
                    <Typography variant="body2" color="text.secondary">
                      Right side content for Paper 1
                    </Typography>
                  </ListItemSecondaryAction> */}
                </ListItem>
              ))}

            </List>
          </Card>

          {/* <Card style={{ backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}> */}

          {/* <List style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <ListItem alignItems="flex-start" style={{ width: '100%', backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)' }}>
                <ListItemAvatar>
                  <Avatar alt="Paper 1 Image" src="paper1-image-url.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Paper 1 Text"
                  secondary="Secondary text for Paper 1"
                />
                <ListItemSecondaryAction>
                  <Typography variant="body2" color="text.secondary">
                    Right side content for Paper 1
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>

            </List> */}
          {/* </CardContent>
          </Card> */}
        </Grid>
      </Grid>
    </Container >
  );
}

export default WeatherCityPage;
