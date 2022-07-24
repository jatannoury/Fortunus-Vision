import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

import Colors from "../constants/colors";
enableScreens();
export const Authentication = () => {
  const Stack = createNativeStackNavigator();
  return (
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
    </Stack.Navigator>
  );
};
