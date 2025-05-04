import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";

const EventList = () => {
    const eventData = [
        { id: '1', title: 'Event 1', date: '2023-10-01', time: '10:00 AM', location: 'Location 1', description: 'Description 1' },
        { id: '2', title: 'Event 2', date: '2023-10-02', time: '11:00 AM', location: 'Location 2', description: 'Description 2' },
        { id: '3', title: 'Event 3', date: '2023-10-03', time: '12:00 PM', location: 'Location 3', description: 'Description 3' },
        { id: '4', title: 'Event 4', date: '2023-10-04', time: '01:00 PM', location: 'Location 4', description: 'Description 4' },
        { id: '5', title: 'Event 5', date: '2023-10-05', time: '02:00 PM', location: 'Location 5', description: 'Description 5' },
        { id: '6', title: 'Event 6', date: '2023-10-06', time: '03:00 PM', location: 'Location 6', description: 'Description 6' },
        { id: '7', title: 'Event 7', date: '2023-10-07', time: '04:00 PM', location: 'Location 7', description: 'Description 7' },
        { id: '8', title: 'Event 8', date: '2023-10-08', time: '05:00 PM', location: 'Location 8', description: 'Description 8' },
        { id: '9', title: 'Event 9', date: '2023-10-09', time: '06:00 PM', location: 'Location 9', description: 'Description 9' },
        { id: '10', title: 'Event 10', date: '2023-10-10', time: '07:00 PM', location: 'Location 10', description: 'Description 10' },
    ];

    return (
        <FlatList 
            data={eventData}
            renderItem={({ item }) => <EventCard {...item} />}
            keyExtractor={(item) => item.id?.toString()}
            style={styles.listContainer}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    },
})

export default EventList;