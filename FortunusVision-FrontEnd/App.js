import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LandingScreen from "./screens/LandingScreen";
import Colors from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExpertScreen from "./screens/ExpertScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
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
          name="ExpertPage"
          component={ExpertScreen}
          options={{
            title: "Expert Page",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
