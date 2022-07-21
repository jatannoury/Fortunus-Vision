import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Authentication } from "../screens/AuthenticationScreens";
import { UserScreen } from "../screens/UsersScreens";
import { ExpertsScreen } from "../screens/ExpertsScreen";

const Root = () => {
  const userType = useSelector((state) => state.user.userType);

  return (
    <>
      {!userType & (userType !== 0) ? (
        <Authentication />
      ) : userType === 1 ? (
        <ExpertsScreen />
      ) : (
        <UserScreen />
      )}
    </>
  );
};

export default Root;
