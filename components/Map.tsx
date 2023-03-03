import { LatLngExpression } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [35, 45],
});

function Map() {
  const position: LatLngExpression = [51.505, -0.09];
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className='w-full h-[65vh]'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker icon={markerIcon} position={position} />
      </MapContainer>
    </>
  );
}

export default Map;
