import SignInScreen from "./Screens/SignInScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Screens/LandingScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />}></Route>
          <Route path="/LandingScreen" element={<LandingScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
