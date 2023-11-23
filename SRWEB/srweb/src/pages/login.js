import '../style/App.css';
import * as React from 'react';
import {ButtonAppBar} from '../components/menubar.js'
import { Box, Container } from '@mui/system';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export function Login() {
  return (
    <div className='login'>
      <ButtonAppBar />
      <Container maxWidth="lg">
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',  // Stack children vertically
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            mx: '0.5',
            bgcolor: '#ffffff',
            autoComplete : 'off'
        }}
        >
          <div id="idField" style={{ margin: '5px' }}>
            <TextField label="ID" variant="outlined" className='loginField'/>  
          </div>
          <div id="pwField" style={{ margin: '5px' }}>
            <TextField label="Password" variant="outlined" type="password" autoComplete="current-password" className='loginField'/> 
          </div> 
          <div id="loginButton" style={{ margin: '10px'}}>
            <Button variant="contained" className='loginField' >Login</Button>
          </div> 
        </Box>
      </Container>
    </div>
  );
}

