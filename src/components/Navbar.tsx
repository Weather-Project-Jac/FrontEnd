import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Tooltip,
  TextField,
  InputAdornment,
  Link,
  Avatar,
  Autocomplete,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserStore } from '../store/store';
import logo from '../assets/Logo.png';
import user from '../assets/user.png';
import { City, ICity } from 'country-state-city';

const settings: string[] = ['Profile', 'Favourites', 'Logout'];

function ResponsiveAppBar(): JSX.Element {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [city, setCity] = useState<string>('');
  const [optionsCity, setOptionsCity] = useState<ICity[]>([]);

  const CitiesInfo: ICity[] = City.getAllCities();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const onEnterSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (optionsCity.length > 0) {
        /* render a component to select a city */
      } else if (optionsCity.length === 0) {
        /* render a component to show that the city is not found */
      } else {
        /* render a component to show that that city doesnt exist */
      }
    }
  };

  useEffect(() => {
    if (city.trim().length > 0) {
      const foundExact = CitiesInfo.find(
        (cityInfo: ICity) => cityInfo.name.toLowerCase() === city.trim().toLowerCase()
      );
      if (!foundExact) {
        const citiSearched: ICity[] = CitiesInfo.filter((cityInfo: ICity) =>
          cityInfo.name.toLowerCase().startsWith(city.trim().toLowerCase())
        ).slice(0, 5);
        setOptionsCity(citiSearched);
      } else {
        setOptionsCity([foundExact]);
      }
    } else {
      setOptionsCity([]);
    }
  }, [city, CitiesInfo]);

  const isLogged: boolean = UserStore((state) => state.isLogged);

  return (
    <AppBar position="static" style={{ backgroundColor: '#132E32' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Link
            onClick={() => {
              if (window.location.pathname !== '/') window.location.href = '/';
            }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src={logo} style={{ width: '100px', filter: 'drop-shadow(4px 4px rgba(0, 0, 0, 0.25)' }} alt="logo" />
          </Link>


          {/* Autocomplete is for mobile */}
          <Autocomplete
            options={optionsCity.map((option: ICity) => option.name + ", " + option.countryCode)}            freeSolo
            disableClearable
            fullWidth
            sx={{
              display: { xs: 'flex', md: 'none' }
            }}
            noOptionsText=""
            renderInput={(params) => (
              <TextField
                {...params}
                autoComplete="off"
                placeholder="Cerca localita'"
                size="small"
                sx={{
                  '& fieldset': { border: 'none' },
                  textAlign: 'center',
                  paddingRight: '10px',
                }}
                value={city}
                onChange={onSearchChange}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    borderRadius: '150px',
                    border: '#176087 2px solid',
                    color: 'white',
                    paddingRight: '0px',
                    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
                  }, 
                  onKeyDown: onEnterSearch,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => onEnterSearch({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>)}
                        style={{ backgroundColor: '#176087', borderRadius: '0 25px 25px 0' }}
                        aria-label="toggle password visibility"
                      >
                        <SearchIcon style={{ color: 'white', marginRight: '5px', marginLeft: '5px' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {/* Box is for pc */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Autocomplete
                options={optionsCity.map((option: ICity) => option.name + ", " + option.countryCode)}
                freeSolo
                disableClearable
                style={{
                  width: "80%",
                }}
                noOptionsText=""
                renderInput={(params) => (
                  <TextField
                    {...params}
                    autoComplete="off"
                    placeholder="Cerca localita'"
                    size="small"
                    sx={{
                      '& fieldset': { border: 'none' },
                    }}
                    value={city}
                    onChange={onSearchChange}
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        borderRadius: '150px',
                        border: '#176087 2px solid',
                        color: 'white',
                        paddingRight: '0px',
                        boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
                      }, endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            style={{ backgroundColor: '#176087', borderRadius: '0 25px 25px 0' }}
                            aria-label="toggle password visibility"
                          >
                            <SearchIcon style={{ color: 'white', marginRight: '5px', marginLeft: '5px' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLogged ? (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                ) : (
                  <div
                    style={{
                      borderRadius: '150px',
                      border: '#176087 2px solid',
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={user}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        margin: '7px 10px 7px',
                      }}
                    />
                    <span
                      style={{
                        color: 'white',
                        fontFamily: 'Cascadia Code, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      Login
                    </span>
                  </div>
                )}
              </IconButton>
            </Tooltip>
            {isLogged && (
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
