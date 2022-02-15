import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';

const Map = () => {
  return (
    <MapView style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
    }}>
      <Marker coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Origin"
          description='San Francisco'
          identifier='origin'
        />
    </MapView>
      
  );
};

export default Map;


