import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Root from "./components/Root";
import GettingCall from "./screens/GettingCall";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
        
        {/* <GettingCall /> */}
      </NavigationContainer>
    </Provider>
  );
}
