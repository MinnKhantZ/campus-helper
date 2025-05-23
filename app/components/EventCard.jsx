import { View, Text, StyleSheet } from "react-native"

const EventCard = ( event ) => {
    const date = new Date(event.date);
    const formatTime = (date) =>
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const formatDate = (date) =>
        date.toISOString().split("T")[0]; // YYYY-MM-DD
    
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    header: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "skyblue",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    body: {
        width: "90%",
        padding: 10,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    dateTime: {
        fontSize: 16,
        color: "#888",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    date: {
        fontSize: 16,
        color: "white",
    },
    time: {
        fontSize: 16,
        color: "white",
    },
    location: {
        fontSize: 16,
    },
    description: {
        fontSize: 16,
    }
})

export default EventCard;