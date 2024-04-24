import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Divider,
} from "@mui/material";

function AuthPage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: 10 }}
        >
          <Grid item xs={12} sm={5.5}>
            <Card
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" textAlign="center">
                  Login
                </Typography>
                <form>
                  <div>
                    <Typography>Email</Typography>
                    <TextField
                      type="email"
                      required
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Password</Typography>
                    <TextField
                      type="password"
                      required
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "white", color: "black", borderRadius: "30px" }}
                    fullWidth
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              backgroundColor: "white",
              marginTop: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              height: "600px",
            }}
          />
          <Grid item xs={12} sm={5.5}>
            <Card
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" textAlign="center">
                  Register
                </Typography>
                <form>
                  <div>
                    <Typography>Email</Typography>
                    <TextField
                      type="email"
                      required
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Username</Typography>
                    <TextField
                      type="username"
                      required
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Password</Typography>
                    <TextField
                      type="password"
                      required
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "white", color: "black", borderRadius: "30px" }}
                    fullWidth
                  >
                    Register
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AuthPage;
