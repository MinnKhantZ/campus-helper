import { View, StyleSheet, Text } from "react-native";

const TimeTableScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TimeTable Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default TimeTableScreen;