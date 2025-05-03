import { SafeAreaView, StyleSheet, Text } from "react-native";

const ClubsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Clubs Screen</Text>
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

export default ClubsScreen;