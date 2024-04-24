import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Tooltip, TextField, InputAdornment } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { UserStore } from '../store/store'

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
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {isLogged}
            LOGO
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <TextField
                autoComplete='off'
                className="test"
                label="Cerca localita'"
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
    </AppBar>
  );
}
export default ResponsiveAppBar;
