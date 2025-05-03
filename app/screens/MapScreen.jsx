import { SafeAreaView, StyleSheet, Text } from "react-native";

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Map Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default MapScreen;