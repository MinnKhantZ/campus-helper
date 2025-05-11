import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Platform } from "react-native";

const ScreenHeader = ({ name, navigation, screen }) => {

  const handlePress = () => {
    if (screen) {
      navigation.navigate(screen);
    } else {
      navigation.goBack();
    }
  }

  return (
    <View
      style={{
        backgroundColor: "skyblue",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{
          position: "absolute",
          left: Platform.OS == "ios" ? 35 : 15,
          paddingVertical: Platform.OS == "ios" ? 10 : 7,
        }}
      >
        <AntDesign name="arrowleft" color={"white"} size={32} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 22,
          color: "white",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ScreenHeader;
