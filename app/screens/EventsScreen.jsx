import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventList from "../components/EventList";

const EventsScreen = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate("EventAdd");
    }

    return (
        <View style={styles.container}>
            <EventList />
            <TouchableOpacity style={styles.addButton} onPress={handlePress}>
                <Icon name="plus" size={40} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "skyblue",
        borderRadius: 50,
        padding: 10,
    },
})

export default EventsScreen;