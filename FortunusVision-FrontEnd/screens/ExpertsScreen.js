import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/colors";
import DrawerHeader from "../components/DrawerHeader";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import ChatsScreen from "./ChatsScreen";
import Logout from "./Logout";
import ChatScreen from "./ChatScreen";
import ChatPhoto from "../components/ChatPhoto";
import BookingScreen from "./BookingScreen";
export function ExpertsScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.primary600,
      }}
    >
      <Stack.Screen
        name="Chats"
        component={ExpertDrawerNavigator}
        options={{
          title: "Chats",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Booking"
        component={ExpertDrawerNavigator}
        options={{
          title: "Set your available dates",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "",
          headerBackTitleVisible: true,
          headerLeft: ({ navigation }) => <ChatPhoto navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Logout"
        component={ExpertDrawerNavigator}
        options={{
          title: "Logout",
        }}
      />
    </Stack.Navigator>
  );
}

export function ExpertDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.primary600,
        sceneContainerStyle: { backgroundColor: Colors.primary500 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary800,
        drawerActiveTintColor: Colors.primary600,
        drawerStyle: { backgroundColor: Colors.primary500 },
      }}
    >
      <Drawer.Screen
        name="Chats History"
        component={ChatsScreen}
        options={{
          title: "Chats",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="wechat" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookings"
        component={BookingScreen}
        options={{
          title: "Select Available Spots",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: "Logout",
          drawerIcon: ({ color, size }) => (
            <SimpleLineIcons name="logout" size={30} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader name={"Joseph Tannoury"} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
