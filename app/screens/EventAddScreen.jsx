import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import ScreenHeader from "../components/ScreenHeader";

const EventAddScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const formatDate = (date) =>
    date.toISOString().split("T")[0]; // YYYY-MM-DD

  const handleChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const handleSubmit = () => {
    const newEvent = {
      id: Date.now().toString(),
      title,
      date: formatDate(date),
      time: formatTime(date),
      location,
      description,
    };
    console.log("New Event:", newEvent);
    // You can now handle the event (e.g. send to API, save to state)
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScreenHeader name={"Add Event"} navigation={navigation}/>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Date & Time</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.dateText}>
            {formatDate(date)} - {formatTime(date)}
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={handleChange}
          />
        )}

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.buttonContainer}>
          <Button title="Save Event" onPress={handleSubmit} color="#007AFF" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  form: {
    marginHorizontal: 20,
    marginTop: 20,
    gap: 15,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    borderColor: "#DDD",
    borderWidth: 1,
    fontSize: 16,
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
  dateButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FFF",
    borderColor: "#DDD",
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default EventAddScreen;
