import GoogleMapReact from 'google-map-react';
import React from 'react';

const GoogleMapWrapper = () => {
  // setup map

  const defaultProps = {
    center: {
      lat: 37.485809,
      lng: 127.120437,
    },
    zoom: 17,
  };

  const contentString =
    '<div>' +
    '<h1>Moriahtown</h1>' +
    '<div>' +
    '<p>B-915, MSTATE, 114, BEOBWON-RO, SONGPA-GU, SEOUL, 05854, KOREA.</p>' +
    '</div>' +
    '</div>';

  // return map
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCOC8RElifFdsEwXN0mO0nXy43kKU46J0Q' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          const infowindow = new maps.InfoWindow({
            content: contentString,
            maxWidth: 200,
          });

          const marker = new maps.Marker({
            position: defaultProps.center,
            map,
          });
          marker.addListener('click', () => {
            infowindow.open(map, marker);
          });
          return marker;
        }}
      >
        {/* mark here */}
      </GoogleMapReact>
    </>
  );
};

export default GoogleMapWrapper;
