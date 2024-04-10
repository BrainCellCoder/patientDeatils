import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Modal, Box, TextField, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NavBar() {
  const [open, setOpen] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box
      sx={{
        position: 'absolute',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Add Patient Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={5}>
        <Typography variant="subtitle1" gutterBottom>Latitude</Typography>
          <TextField id="latitude" variant="standard" value={latitude ? latitude : null} disabled InputProps={{ readOnly: true}}/>
        </Grid>
        <Grid item xs={5}>
        <Typography variant="subtitle1" gutterBottom>Longitude</Typography>
          <TextField id="longitude" variant="standard" value={longitude ? longitude : null} disabled InputProps={{ readOnly: true}}/>
        </Grid>
        <Grid item xs={2}>
          <LocationOnIcon sx={{cursor: "pointer", fontSize: "3rem", color: "	#E90000"}} onClick={getLocation}/>
        </Grid>
      </Grid>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Age" fullWidth margin="normal" />
      <TextField label="Sex" fullWidth margin="normal" />
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Save</Button>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          B. Borooah Cancer Institute
        </Typography>
        <Button variant="contained" color="success" onClick={handleOpen}>
          Add Patient Details
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {body}
        </Modal>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
