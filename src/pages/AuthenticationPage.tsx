import React, { useEffect, useState } from 'react';
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
import { CustomAlertProps, CustomAlert } from "../components/CustomAlert.tsx";
import axiosConf from "../axios/axiosConf.ts";
import { UserStore } from '../store/store.ts';
import { useNavigate } from 'react-router-dom';
import userPng from '../assets/userx512.png';

interface LoginInfo {
  email: string;
  password: string;
  passwordVisible: boolean;
}

interface RegisterInfo {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  passwordVisible: boolean;
  confirmPasswordVisible: boolean;
}

function AuthPage() {
  const user = UserStore();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({ email: "", password: "", passwordVisible: false });
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({ email: "", username: "", password: "", confirmPassword: "", passwordVisible: false, confirmPasswordVisible: false });

  useEffect(() => {
    if (user.isLogged) {
      navigate("/");
    }
  }, [user.isLogged, navigate]);

  const [alert, setAlert] = useState<CustomAlertProps>({
    message: null,
    severity: null,
    handleClose: () => { }
  });

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginInfo.email === "" || loginInfo.password === "") {
      setAlert({ message: "Please fill in all fields", severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      return;
    }
    axiosConf.post('/user/login', {
      mail: loginInfo.email,
      psw: loginInfo.password
    }).then((response) => {
      console.log(response);
      setAlert({ message: "User logged in", severity: "success", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      loginInfo.email = "";
      loginInfo.password = "";

      user.setEmail(response.data?.result?.email || "NOT IMPLEMENTED FROM BACKEND");
      user.setUsername(response.data?.result?.username || "NOT IMPLEMENTED FROM BACKEND");
      user.setAvatar(response.data?.result?.profile_image_url || userPng);
      user.setToken(response.data?.token || "NOT IMPLEMENTED FROM BACKEND");
      user.setIsLogged();

      navigate("/");
    }).catch((error) => {
      console.log(error);
      setAlert({ message: error?.response?.data || "Error logging in", severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
    });
  };

  const submitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerInfo.email === "" || registerInfo.username === "" || registerInfo.password === "" || registerInfo.confirmPassword === "") {
      setAlert({ message: "Please fill in all fields", severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) }); return;
    };
    if (registerInfo.password !== registerInfo.confirmPassword) {
      setAlert({ message: "Passwords do not match", severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      return;
    }
    axiosConf.post('/user', {
      mail: registerInfo.email,
      usr: registerInfo.username,
      psw: registerInfo.password,
      dataR: new Date(),
      profile: "https://placehold.co/600x400"
    })
      .then((response) => {
        console.log(response);
        setAlert({ message: "User registered", severity: "success", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });

        registerInfo.email = "";
        registerInfo.username = "";
        registerInfo.password = "";
        registerInfo.confirmPassword = "";

        user.setEmail(response.data?.result?.email || "NOT IMPLEMENTED FROM BACKEND");
        user.setUsername(response.data?.result?.username || "NOT IMPLEMENTED FROM BACKEND");
        user.setAvatar(response.data?.result?.profile_image_url || userPng);
        user.setToken(response.data?.token || "NOT IMPLEMENTED FROM BACKEND");
        user.setIsLogged();
      })
      .catch((error) => {
        console.log(error);
        setAlert({ message: error?.response?.data || "Error registering user", severity: "error", handleClose: () => setAlert({ message: null, severity: null, handleClose: () => { } }) });
      });
  }


  return (
    <Container maxWidth="md">
      <CustomAlert
        message={alert.message}
        severity={alert.severity}
        handleClose={alert.handleClose}
      />
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
                        endAdornment: (
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
              //height: "600px",
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
                        endAdornment: (
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
                        endAdornment: (
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