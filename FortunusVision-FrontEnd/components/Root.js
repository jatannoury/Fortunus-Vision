import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Authentication } from "../screens/AuthenticationScreens";
import { UserScreen } from "../screens/UsersScreens";
import { ExpertsScreen } from "../screens/ExpertsScreen";

const Root = () => {
  const userType = useSelector((state) => state.user.userType);
  const [redirect, isRedirected] = useState(null);
  useEffect(() => {
    isRedirected(userType);
  }, [userType]);
  return (
    <>
      {!redirect & (redirect !== 0) ? (
        <Authentication />
      ) : redirect === 0 ? (
        <UserScreen />
      ) : (
        <ExpertsScreen />
      )}
    </>
  );
};

export default Root;
