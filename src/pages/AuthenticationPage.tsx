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
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function AuthPage() {
  const [loginInfo, setLoginInfo] = React.useState({ email: "", password: "", passwordVisible: false });
  const [registerInfo, setRegisterInfo] = React.useState({ email: "", username: "", password: "", confirmPassword: "", passwordVisible: false, confirmPasswordVisible: false });
  //const [loginError, setLoginError] = React.useState("");
  //const [registerError, setRegisterError] = React.useState("");

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginInfo);
    if(loginInfo.email === "" || loginInfo.password === "") {
      //setLoginError("Please fill in all fields");
      return;
    }
    /* axios */
  };

  const submitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(registerInfo);
    if(registerInfo.email === "" || registerInfo.username === "" || registerInfo.password === "" || registerInfo.confirmPassword === "") {
      //setRegisterError("Please fill in all fields");
      return;
    }
    if(registerInfo.password !== registerInfo.confirmPassword) {
     // setRegisterError("Passwords do not match");
      return;
    }
    /* axios */
  };


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
                      value={loginInfo.email}
                      onChange={(e) =>
                        setLoginInfo({ ...loginInfo, email: e.target.value })
                      }
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Password</Typography>
                    <TextField
                      autoComplete="off"
                      type={loginInfo.passwordVisible ? 'text' : 'password'}
                      required
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                        endAdornment:(
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setLoginInfo({ ...loginInfo, passwordVisible: !loginInfo.passwordVisible })}
                                edge="end"
                              >
                                {loginInfo.passwordVisible ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                        )
                      }}
                      value={loginInfo.password}
                      onChange={(e) =>
                        setLoginInfo({ ...loginInfo, password: e.target.value })
                      }
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <Button
                    type="submit"
                    onClick={submitLogin}
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
                      value={registerInfo.email}
                      onChange={(e) =>
                        setRegisterInfo({ ...registerInfo, email: e.target.value })
                      }
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Username</Typography>
                    <TextField
                     autoComplete="off"
                      type="text"
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
                      value={registerInfo.username}
                      onChange={(e) =>
                        setRegisterInfo({ ...registerInfo, username: e.target.value })
                      }
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <Typography>Password</Typography>
                    <TextField
                      autoComplete="off"
                      type={registerInfo.passwordVisible ? 'text' : 'password'}
                      required
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                        endAdornment:(
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setRegisterInfo({ ...registerInfo, passwordVisible: !registerInfo.passwordVisible })}
                                edge="end"
                              >
                                {registerInfo.passwordVisible ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                        )
                      }}
                      value={registerInfo.password}
                      onChange={(e) =>
                        setRegisterInfo({ ...registerInfo, password: e.target.value })
                      }
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                    />
                    
                  </div>
                  <div>
                    <Typography>Confirm Password</Typography>
                    <TextField
                      autoComplete="off"
                      type={registerInfo.confirmPasswordVisible ? 'text' : 'password'}
                      required
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                          border: "white 2px solid",
                          color: "white",
                        },
                        endAdornment:(
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setRegisterInfo({ ...registerInfo, confirmPasswordVisible: !registerInfo.confirmPasswordVisible })}
                              edge="end"
                            >
                              {registerInfo.confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        marginBottom: "20px",
                      }}
                      value={registerInfo.confirmPassword}
                      onChange={(e) =>
                        setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    onClick={submitRegister}
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
