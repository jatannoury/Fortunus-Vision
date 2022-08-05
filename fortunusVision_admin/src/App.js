import SignInScreen from "./Screens/SignInScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Screens/LandingScreen";
import AllUsersScreen from "./Screens/AllUsersScreen";
import SearchUsers from "./Screens/SearchUsers";
import AcceptAnExpertScreen from "./Screens/AcceptAnExpertScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />}></Route>
          <Route path="/LandingScreen" element={<LandingScreen />}></Route>
          <Route path="/AllUsers" element={<AllUsersScreen />}></Route>
          <Route path="/SearchUsers" element={<SearchUsers />}></Route>
          <Route
            path="/AcceptExperts"
            element={<AcceptAnExpertScreen />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
