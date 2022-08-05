import React from "react";
import PhoneActions from "./PhoneActions";

const CallButton = ({ startCall }) => {
  return (
    <PhoneActions
      icon="call"
      color={"green"}
      onPress={startCall}
      style={{ marginRight: 45 }}
    />
  );
};

export default CallButton;