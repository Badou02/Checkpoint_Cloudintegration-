import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MapContainer = styled.div`
  width: 80%;
  height: 60vh;
`;

const mapStyles = {        
  height: "100%",
  width: "100%"
};

const defaultCenter = {
  lat: 48.8566, 
  lng: 2.3522
};

function App() {
  return (
    <Container>
      <h1>Bienvenue sur notre page Google Maps</h1>
      <MapContainer>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      </MapContainer>
    </Container>
  );
}

export default App;
