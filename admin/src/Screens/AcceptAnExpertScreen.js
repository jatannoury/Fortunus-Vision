import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styling/AcceptExpert.css";
import ExpertCard from "../components/ExpertCard";
import { getRequests } from "../helper/http";
const AcceptAnExpertScreen = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    async function fetchRequests() {
      let request = await getRequests();
      setRequests(request);
    }
    fetchRequests();
  }, []);
  return (
    <div className="backgroundImage3">
      <NavBar />
      {requests.length !== 0 &&
        requests.map((item) => {
          return <ExpertCard info={item} />;
        })}
    </div>
  );
};

export default AcceptAnExpertScreen;
