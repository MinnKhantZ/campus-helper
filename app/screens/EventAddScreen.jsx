import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import ScreenHeader from "../components/ScreenHeader";
import { useCreateEventMutation } from "../api/Event";
import Colors from "../constants/Colors"; // Import the Colors constant

const EventAddScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const formatDate = (date) =>
    date.toISOString().split("T")[0]; // YYYY-MM-DD

  const handleChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const handleSubmit = async () => {
    const newEvent = {
      title,
      description,
      date,
      place,
    };
    console.log("New Event:", newEvent);
    
    try {
      const event = await createEvent(newEvent);
      console.log("Event created successfully: ", event);
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScreenHeader name={"Add Event"} navigation={navigation}/>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          placeholderTextColor={Colors.gray}
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
            accentColor={Colors.primary}
          />
        )}

        <Text style={styles.label}>Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter place"
          placeholderTextColor={Colors.gray}
          value={place}
          onChangeText={setPlace}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Enter description"
          placeholderTextColor={Colors.gray}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Save Event</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    color: Colors.primaryDark,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 12,
    borderColor: Colors.gray,
    borderWidth: 1,
    fontSize: 16,
    color: Colors.black,
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
  dateButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.surface,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    color: Colors.black,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
    backgroundColor: Colors.primaryLight,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventAddScreen;