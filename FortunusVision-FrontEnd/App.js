import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import LandingScreen from "./screens/LandingScreen";
import Colors from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExpertScreen from "./screens/ExpertScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ChatsScreen from "./screens/ChatsScreen";
import { FontAwesome } from "@expo/vector-icons";
import BookingScreen from "./screens/BookingScreen";
import RechargeCoinsScreen from "./screens/RechargeCoinsScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfilePicture from "./screens/ProfilePicture";
import { Text } from "react-native";
import ChatPhoto from "./components/ChatPhoto";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <Text>YOOOO</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary600,
          sceneContainerStyle: { backgroundColor: Colors.primary500 },
          drawerContentStyle: { backgroundColor: Colors.primary500 },
          drawerInactiveTintColor: "#e4baa1",
          drawerActiveTintColor: Colors.primary600,
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
              <MaterialCommunityIcons
                name="book-clock"
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: "History",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-check-outline"
                color={color}
                size={30}
              />
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
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary600,
        }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Sign In",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUP"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerShown: false,
          }}
        />
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
            headerLeft: ({ navigation }) => (
              <ChatPhoto navigation={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
