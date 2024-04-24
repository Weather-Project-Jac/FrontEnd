import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Tooltip, TextField, InputAdornment, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/Logo.png';

const settings = ['Profile', 'Favourites', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#132E32" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

          <Link onClick={() => {
            if (window.location.pathname !== "/") window.location.href = "/"
          }} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} style={{ width: "100px" }} />
          </Link>

          {/* TextField is for mobile */}
          <TextField
            autoComplete='off'
            className="test"
            label="Cerca localita'"
            size="small"
            sx={{
              "& fieldset": { border: 'none' },
              display: { xs: 'flex', md: 'none' },
              marginRight: 1,
              textAlign: 'center',
            }}
            InputProps={{
              style: {
                borderRadius: "150px",
                border: '#176087 2px solid',
                color: 'white',
              },
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: 'white' }} />
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              style: {
                color: 'white',
                outline: 'none',
              }
            }}
          />

          {/* Box is for pc */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <TextField

                autoComplete='off'
                className="test"
                label="Cerca localita'"
                size="small"
                variant="outlined"
                sx={{
                  "& fieldset": { border: 'none' },
                  width: '50%',
                }}
                InputProps={{
                  style: {
                    borderRadius: "150px",
                    border: '#176087 2px solid',
                    color: 'white',
                  },
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: 'white', }} />
                    </InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                    outline: 'none',
                  }
                }}
              />
            </div>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;
