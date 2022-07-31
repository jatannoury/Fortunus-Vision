import SignInScreen from "./Screens/SignInScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Screens/LandingScreen";
import AllUsersScreen from "./Screens/AllUsersScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />}></Route>
          <Route path="/LandingScreen" element={<LandingScreen />}></Route>
          <Route
            path="/LandingScreen/AllUsers"
            element={<AllUsersScreen />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
