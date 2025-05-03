import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "./screens/CalendarScreen";
import TimeTableScreen from "./screens/TimeTableScreen";
import MapScreen from "./screens/MapScreen";
import ClubsScreen from "./screens/ClubsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MarketplaceScreen from "./screens/MarketplaceScreen";

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TabGroup" component={DrawerGroup} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  const screenOptions = {
    // headerShown: false,
  };

  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="Home" component={TabGroup} />
      <Drawer.Screen name="Marketplace" component={MarketplaceScreen} />
      <Drawer.Screen name="Clubs" component={ClubsScreen} />
    </Drawer.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const TabGroup = () => {
  const screenOptions = {
    headerShown: false,
    tabBarLabel: () => null,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
      />
      <Tab.Screen
        name="TimeTable"
        component={TimeTableScreen}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackGroup />
        </NavigationContainer>
    );
};

export default Navigation;