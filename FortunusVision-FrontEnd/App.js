import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import Colors from "./constants/colors";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary500,
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
          component={LandingScreen}
          options={{
            title: "Land",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
