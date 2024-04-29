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
import icons from '../assets/icons/index.ts';
import { CenterFocusStrong } from "@mui/icons-material";

function HomePage() {
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
              <Grid container rowSpacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"}>
                <Grid item marginTop={2} marginLeft={2}>
                  <Typography variant="h4" gutterBottom align="left">
                    Locality
                  </Typography>
                </Grid>
                <Grid item marginTop={2} marginRight={2}>
                  <Typography variant="h6" gutterBottom align="right">
                    Time
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

        <Grid item xs={12} sm={7} justifyContent="center" alignItems="center">
          <Card style={{ backgroundColor: '#1D2837', color: 'white', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent >
              <List>
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)', marginBottom: '8px' }}>
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
                <ListItem alignItems="flex-start" style={{ backgroundColor: 'rgba(158, 220, 243, .25)', borderRadius: '15px', boxShadow: '2px 2px 2px rgba(225, 135, 0, .5)' }}>
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
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >
  );
}

export default HomePage;
