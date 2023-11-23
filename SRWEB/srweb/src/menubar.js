import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import {IconButtonMenu} from './iconbutton.js';



export function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButtonMenu/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SAEROM
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
