import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 23.786036963987012,
    lng: 90.40059962938265
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)