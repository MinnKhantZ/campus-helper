import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";
import { useGetAllEventsQuery } from "../api/Event";
import { scheduleEventNotification } from "../utils/notiService";

const EventList = () => {
    const { data, refetch } = useGetAllEventsQuery();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            data.forEach(event => {
                scheduleEventNotification(event);
            });
        }
    }, [data]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    return (
        <FlatList 
            data={data}
            renderItem={({ item }) => <EventCard {...item} />}
            keyExtractor={(item) => item.id?.toString()}
            style={styles.listContainer}
            refreshing={refreshing}
            onRefresh={handleRefresh}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    },
});

export default EventList;
