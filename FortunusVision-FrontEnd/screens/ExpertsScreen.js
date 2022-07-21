import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/colors";
import DrawerHeader from "../components/DrawerHeader";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import ChatsScreen from "./ChatsScreen";
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
