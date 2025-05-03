import { SafeAreaView, StyleSheet, Text } from "react-native";

const MarketplaceScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Marketplace Screen</Text>
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

export default MarketplaceScreen;