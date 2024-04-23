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
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 10 }}
      >
        <Grid item xs={12} sm={5}>
          <Card style={{ backgroundColor: '#0A2239', color: 'white', maxWidth: 400, margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography variant="h4" gutterBottom align="left">
                    Left Title
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" gutterBottom align="right">
                    Right Title
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box component='img' 
                  sx={{
                    display: 'block',
              height: 233,
              width: '100%', // Make the image box span the full width
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
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

        <Grid item xs={12} sm={7} justifyContent="center" alignItems="center">
          <Card style={{ backgroundColor: '#0A2239', color: 'white', maxWidth: 750, margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)' }}>
            <CardContent>
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
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
