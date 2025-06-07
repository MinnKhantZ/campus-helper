import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "./screens/EventsScreen";
import TimeTableScreen from "./screens/TimeTableScreen";
import MapScreen from "./screens/MapScreen";
import ClubsScreen from "./screens/ClubsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MarketplaceScreen from "./screens/MarketplaceScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventAddScreen from "./screens/EventAddScreen";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TabGroup" component={DrawerGroup} />
      <Stack.Screen name="EventAdd" component={EventAddScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerActiveTintColor: Colors.drawerActive,
        drawerInactiveTintColor: Colors.drawerInactive,
        drawerStyle: {
          backgroundColor: Colors.surface,
        },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Marketplace') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          } else if (route.name === 'Clubs') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Home" component={TabGroup} />
      <Drawer.Screen name="Marketplace" component={MarketplaceScreen} />
      <Drawer.Screen name="Clubs" component={ClubsScreen} />
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabGroup = () => {
  const screenOptions = {
    headerShown: false,
    tabBarLabel: () => null,
    tabBarStyle: {
      backgroundColor: Colors.tabBackground,
      borderTopColor: Colors.background,
      elevation: 5,
    },
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.gray,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeTable"
        component={TimeTableScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clock-time-four-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-marker" color={color} size={size} />
          ),
        }}
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
