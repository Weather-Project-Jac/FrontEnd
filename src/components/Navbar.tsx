import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Tooltip, TextField, InputAdornment, Link, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserStore } from '../store/store'
import logo from '../assets/Logo.png';
import user from '../assets/user.png';

const settings = ['Profile', 'Favourites', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLogged = UserStore((state) => state.isLogged)

  return (
    <AppBar position="static" style={{ backgroundColor: "#132E32" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

          <Link onClick={() => {
            if (window.location.pathname !== "/") window.location.href = "/"
          }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={logo} style={{ width: "100px", filter: "drop-shadow(4px 4px rgba(0, 0, 0, 0.25)" }} />
          </Link>

          {/* TextField is for mobile */}
          <TextField
            autoComplete='off'
            className="test"
            placeholder="Cerca localita'"
            size="small"
            sx={{
              "& fieldset": { border: 'none' },
              display: { xs: 'flex', md: 'none' },
              textAlign: 'center',
              paddingRight: '10px'
            }}
            InputProps={{
              style: {
                fontSize: '14px',
                borderRadius: "150px",
                border: '#176087 2px solid',
                color: 'white',
                paddingRight: '0px',
                boxShadow: '4px 4px rgba(0, 0, 0, 0.25)'
              },
              endAdornment: (
                <div>
                  <InputAdornment position="end">
                    <IconButton
                      style={{ backgroundColor: "#176087", borderRadius: '0 25px 25px 0' }}
                      aria-label="toggle password visibility"
                    >
                      <SearchIcon style={{ color: 'white' }} />
                    </IconButton>
                  </InputAdornment>
                </div>
              )
            }}
          />

          {/* Box is for pc */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <TextField
                autoComplete='off'
                className="test"
                placeholder="Cerca localita'"
                size="small"
                sx={{
                  "& fieldset": { border: 'none' },
                  width: '50%',
                }}
                InputProps={{
                  style: {
                    borderRadius: "150px",
                    border: '#176087 2px solid',
                    color: 'white',
                    paddingRight: '0px',
                    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)'
                  },
                  endAdornment: (
                    <div>
                      <InputAdornment position="end">
                        <IconButton
                          style={{ backgroundColor: "#176087", borderRadius: '0 25px 25px 0' }}
                          aria-label="toggle password visibility"
                        >
                          <SearchIcon style={{ color: 'white', marginRight: '5px', marginLeft: '5px' }} />
                        </IconButton>
                      </InputAdornment>
                    </div>
                  )
                }}
              />
            </div>
          </Box>

          <Box sx={{
            flexGrow: 0, mr: 5
          }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLogged ? (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                ) : (
                  <div style={{
                    borderRadius: "150px",
                    border: '#176087 2px solid',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)'
                  }}>
                    <Avatar alt="Remy Sharp" src={user} style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      margin: '7px 10px 7px'
                    }} />
                    <span
                      style={{
                        color: 'white',
                        fontFamily: 'Cascadia Code, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '10px'
                      }}>
                      Login
                    </span>
                  </div>
                )}
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
