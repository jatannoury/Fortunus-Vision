import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Authentication } from "../screens/AuthenticationScreens";
import { UserScreen } from "../screens/UsersScreens";
import { ExpertsScreen } from "../screens/ExpertsScreen";
import AppAgora from "../Agora/components/AppAgora";

const Root = () => {
  const userType = useSelector((state) => state.user.userType);
  const incomingCall = useSelector((state) => state.user.incomingCall);
  const name = useSelector((state) => state.user.name);
  return (
    <>
      {!userType & (userType !== 0) ? (
        <Authentication />
      ) : userType === 1 ? (
        incomingCall.state === 1 ? (
          <AppAgora Name={incomingCall.userName} navigation={navigation} />
        ) : (
          <ExpertsScreen />
        )
      ) : (
        <UserScreen />
      )}
    </>
  );
};

export default Root;