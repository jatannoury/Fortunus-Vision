import React, { useEffect, useState } from "react";
import AllBoxes from "../components/AllBoxes";
import CoinsContainer from "../components/CoinsContainer";
import NavBar from "../components/NavBar";
import { fetchData } from "../helper/http";
import "../styling/LandingScreen.css";
const LandingScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetchData();
      setData(res);
      console.log(res);
    }
    getData();
  }, []);
  return (
    <div className="backgroundImage1">
      <NavBar />
      <CoinsContainer totalCoins={data.totalCoins} />
      <AllBoxes users={data.usersNb} experts={data.expertsNb} />
    </div>
  );
};

export default LandingScreen;
