import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const campusLocations = [
    {
      id: 1,
      name: 'Main Library',
      coordinate: { latitude: 22.030890315496965, longitude: 96.10182477082867 },
    //   image: require('./assets/library-icon.png'),
    },
    {
      id: 2,
      name: 'Dean',
      coordinate: { latitude: 22.03097901933545, longitude: 96.10126019355586 },
    //   image: require('./assets/cafeteria-icon.png'),
    }
  ];

const MapScreen = () => {
    const mapRef = useRef(null);
  
    const focusOnMarker = (index) => {
      mapRef.current.animateToRegion({
        ...campusLocations[index].coordinate,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }, 1000); // Animation duration in ms
    };

    return (
        <View style={styles.container}>
            <MapView 
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                  latitude: 22.030418641588692,
                  longitude: 96.10138536641323,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }}
            >
            {campusLocations.map(location => (
                <Marker
                    key={location.id}
                    coordinate={location.coordinate}
                    title={location.name}
                    tracksViewChanges={false}
                >
                    <View style={styles.customMarker}>
                        {/* <Image source={location.image} style={styles.markerImage} /> */}
                        <Text style={styles.markerText}>Here</Text>
                    </View>
                </Marker>
            ))}
            </MapView>
            <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <Button title="Focus on Library" onPress={() => {focusOnMarker(0)}} />
            </View>
            <View style={{ position: 'absolute', bottom: 60, right: 20 }}>
                <Button title="Focus on Dean" onPress={() => {focusOnMarker(1)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    customMarker: {
        width: 50,
        height: 50,
    },
})

export default MapScreen;