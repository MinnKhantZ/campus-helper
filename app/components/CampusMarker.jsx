import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CampusMarker = React.memo(({ location }) => (
    <Marker
        key={location.id}
        coordinate={location.coordinate}
        title={location.name}
    >
        <View style={styles.customMarker}>
            <MaterialIcons name={location.icon} size={24} color="#6200ee" />
        </View>
    </Marker>
));

CampusMarker.displayName = 'CampusMarker';

const styles = StyleSheet.create({
  customMarker: {
    backgroundColor: "#FFF",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
});

export default CampusMarker;
