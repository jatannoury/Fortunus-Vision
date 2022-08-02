import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Root from "./components/Root";
import Picker from "./components/Picker";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Root /> */}
        <Picker />
      </NavigationContainer>
    </Provider>
  );
}
