import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker } from 'react-map-gl';
import maplibregl  from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { HiLocationMarker } from 'react-icons/hi';

export const PatientMap = ({position,emergencyList}) => {

  const markers = useMemo(() => emergencyList.map((emergency,index) => (
    <Marker key={index}
      longitude={emergency.location.coordinates[0]}
      latitude={emergency.location.coordinates[1]}>
        <HiLocationMarker className="w-8 h-10"/>
    </Marker>)
  ), []);
  
  // useEffect(()=> {
  //   navigator.geolocation.getCurrentPosition((posit) => {
  //     let pos = [...position]
  //     pos[0] = posit.coords.latitude;
  //     pos[1] = posit.coords.longitude;
  //     setPosition(pos)
  //     console.log(pos);
  //   });
  // }, [])
    return (
        <div className="w-full">
            <Map 
             mapLib={maplibregl} 
        initialViewState={{
          longitude: position[0],
          latitude: position[1],
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=e3MS7OaE6X5iOtnzNxL6"
      >
        {markers}
      </Map>
        </div>
            
        
  )
}
