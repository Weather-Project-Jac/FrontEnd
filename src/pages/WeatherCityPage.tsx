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
import LeftCard from "./LeftCard";

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

export default WeatherCityPage;
