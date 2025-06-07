import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const EventCard = ( event ) => {
    const date = new Date(event.date);
    const formatTime = (date) =>
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const formatDate = (date) =>
        date.toISOString().split("T")[0];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{event.title}</Text>
                <View style={styles.dateTime}>
                    <Text style={styles.date}>{formatDate(date)}</Text>
                    <Text style={styles.time}>{formatTime(date)}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.location}>{event.location}</Text>
                <Text style={styles.description}>{event.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        marginVertical: 12,
        borderRadius: 12,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    body: {
        padding: 16,
        backgroundColor: Colors.background,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    dateTime: {
        alignItems: "flex-end",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.white,
        maxWidth: "70%",
    },
    date: {
        fontSize: 14,
        color: Colors.white,
    },
    time: {
        fontSize: 14,
        color: Colors.white,
    },
    location: {
        fontSize: 16,
        color: Colors.black,
        marginBottom: 6,
    },
    description: {
        fontSize: 15,
        color: Colors.black,
    },
});

export default EventCard;
