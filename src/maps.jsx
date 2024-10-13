// MapComponent.js
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.42216, // Default center (Googleplex)
  lng: -122.08427,
};

const MapComponent = ({ selectedProfile }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
    >
      {selectedProfile && (
        <Marker position={{ lat: 37.42216, lng: -122.08427 }} /> // You will later replace with real geolocation
      )}
    </GoogleMap>
  );
};

export default MapComponent;
