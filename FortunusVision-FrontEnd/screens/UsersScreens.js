import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import ExpertScreen from "./ExpertScreen";
import AppointmentScreen from "./AppointmentScreen";
import HistoryScreen from "./HistoryScreen";
import ChatsScreen from "./ChatsScreen";
import BookingScreen from "./BookingScreen";
import RechargeCoinsScreen from "./RechargeCoinsScreen";
import ChatScreen from "./ChatScreen";
import LandingScreen from "./LandingScreen";
import DrawerHeader from "../components/DrawerHeader";
import AppAgora from "../Agora/components/AppAgora";
import Colors from "../constants/colors";
import ChatPhoto from "../components/ChatPhoto";

import Logout from "./Logout";
import BecomeAnExpert from "./BecomeAnExpertScreen";
import RatingScreen from "./RatingScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function UserScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.primary600,
      }}
    >
      <Stack.Screen
        name="LandingPage"
        component={DrawerNavigator}
        options={{
          title: "Landing Page",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appointments"
        component={DrawerNavigator}
        options={{
          title: "Appointments",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExpertPage"
        component={ExpertScreen}
        options={{
          title: "Expert Page",
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={DrawerNavigator}
        options={{
          title: "History",
        }}
      />
      <Stack.Screen
        name="Chats"
        component={DrawerNavigator}
        options={{
          title: "Chats",
        }}
      />
      <Stack.Screen
        name="Logout"
        component={DrawerNavigator}
        options={{
          title: "Logout",
        }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Book Your Appointment",
        }}
      />
      <Stack.Screen
        name="Recharge"
        component={RechargeCoinsScreen}
        options={{
          title: "",
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
        name="RechargeCoins"
        component={DrawerNavigator}
        options={{
          title: "",
          headerBackTitleVisible: true,
          headerLeft: ({ navigation }) => <ChatPhoto navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Become an Expert"
        component={DrawerNavigator}
        options={{
          title: "",
          headerBackTitleVisible: true,
          headerLeft: ({ navigation }) => <ChatPhoto navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Agora"
        component={AppAgora}
        options={{
          title: "Phone Call",
          headerBackTitleVisible: true,
        }}
      />
      <Stack.Screen
        name="RatingScreen"
        component={RatingScreen}
        options={{
          title: "RatingScreen",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
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
        name="Landing Page"
        component={LandingScreen}
        options={{
          title: "Pick Your Expert",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="crystal-ball"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          title: "Booked Appointments",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-clock" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-check" size={30} color={color} />
          ),
        }}
      />
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
        name="Recharge Your Coins"
        component={RechargeCoinsScreen}
        options={{
          title: "Recharge Your Coins",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="coins" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Become An Expert"
        component={BecomeAnExpert}
        options={{
          title: "Become An Expert",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-plus" size={30} color={color} />
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