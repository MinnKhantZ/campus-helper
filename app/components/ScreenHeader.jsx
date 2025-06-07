import { Text } from "react-native";
import { TouchableOpacity, View, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../constants/Colors"; // Import the Colors constant

const ScreenHeader = ({ name, navigation, screen }) => {
  const handlePress = () => {
    if (screen) {
      navigation.navigate(screen);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        Platform.OS === "ios" && styles.iosHeaderPadding
      ]}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.backButton,
          Platform.OS === "ios" && styles.iosBackButton
        ]}
      >
        <AntDesign name="arrowleft" color={Colors.white} size={28} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{name}</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    backgroundColor: Colors.primary,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iosHeaderPadding: {
    paddingTop: 40, // Extra padding for iOS status bar
  },
  backButton: {
    position: "absolute",
    left: 16,
    paddingVertical: 8,
    zIndex: 1,
  },
  iosBackButton: {
    left: 24,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
  },
};

export default ScreenHeader;