import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import "./MapViewTab.css"

export default function MapViewTab(props) {
    const {tab, setTab} = props;
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'  }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="mapTab" label="Map View" />
        <Tab value="listTab" label="List View" />
      </Tabs>
    </Box>
  );
}