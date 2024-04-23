import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  Card,
  CardContent,
} from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Small Card
              </Typography>
              <Typography variant="body1" gutterBottom>
                This card is a bit smaller and placed on the left.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Large Card
              </Typography>
              <Typography variant="body1" gutterBottom>
                This card is bigger and placed on the right.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
