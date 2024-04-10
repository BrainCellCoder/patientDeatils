import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import MapViewTab from '../../component/mapViewTab/MapViewTab'
import { ListView } from '../../component/ListView/ListView';
import { MapView } from '../../component/MapView/MapView';

export const Home = () => {
    const [tab, setTab] = React.useState('mapTab');
  
  return (
    <>
    {/* <NavBar/> */}
    <MapViewTab setTab={setTab} tab={tab}/>
    {
        tab === "mapTab" && <MapView/>
    }
    {
        tab === "listTab" && <ListView/>
    }
    </>
    
  )
}
