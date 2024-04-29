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

function HomePage() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex' }}>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        alignContent="center"
        style={{ marginTop: 0, marginBottom: 30 }}
      >
        <Grid item xs={12} sm={5}>
          <Card style={{ backgroundColor: '#1D2837', color: 'white', margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
              <Grid container spacing={2}>
                <Grid item xs={7} marginTop={2}>
                  <Typography variant="h4" gutterBottom align="left">
                    Left Title
                  </Typography>
                </Grid>
                <Grid item xs={5} marginTop={2}>
                  <Typography variant="h6" gutterBottom align="right">
                    Right Title
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box component='img'
                    sx={{
                      display: 'block',
                      width: '100%',
                      maxHeight: 350,
                      margin: 'auto',
                    }} src="https://placehold.co/400" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom align="center">
                    Description
                  </Typography>
                  <Typography variant="body1" gutterBottom align="center">
                    Temperature
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                      122
                    </Grid>
                    <Grid item xs={6} md={6}>
                      2
                    </Grid>
                    <Grid item xs={6} md={6}>
                      3
                    </Grid>
                    <Grid item xs={6} md={6}>
                      4
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
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
    </Container>
  );
}

export default HomePage;
