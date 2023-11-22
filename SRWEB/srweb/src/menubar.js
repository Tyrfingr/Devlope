import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import {IconMenu} from './menus.js';
import { makeStyles } from '@mui/material';



export function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setAnchorEl(true)}
          >
          <MenuIcon/>
          </IconButton>
          <IconMenu  
          open = {anchorEl}
          onClose = {() => setAnchorEl(false)}
          onClick ={() => setAnchorEl(true)}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SAEROMSOFT
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}