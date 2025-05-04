import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EventAddScreen = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowPicker(Platform.OS === 'ios'); // Keep open on iOS
      setDate(currentDate);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Title"
                />
                <Button 
                  title="Select Date" 
                  onPress={() => setShowPicker(true)} 
                />
                {showPicker && (
                    <DateTimePicker 
                        value={date}
                        mode="time"
                        onChange={onChange}
                    />
                )}
                <TextInput
                    placeholder="Location"
                />
                <TextInput
                    placeholder="Description"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})

export default EventAddScreen;