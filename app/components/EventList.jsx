import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";
import { useGetAllEventsQuery } from "../api/Event";

const EventList = () => {
    const { data } = useGetAllEventsQuery();

    return (
        <FlatList 
            data={data}
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