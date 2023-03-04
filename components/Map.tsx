import { LatLngExpression } from 'leaflet';
import React, { use, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [35, 45],
});

function Map({ position }: { position: LatLngExpression }) {
  function FlyMapTo({
    center,
    zoom,
  }: {
    center: LatLngExpression;
    zoom: number;
  }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(center, zoom);
    }, [position]);
    return null;
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className='w-full h-[65vh]'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker icon={markerIcon} position={position} />
        <FlyMapTo center={position} zoom={13} />
      </MapContainer>
    </>
  );
}

export default Map;
