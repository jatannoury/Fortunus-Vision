import React, { useState } from "react";
import "../styling/SignIn.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const SignInScreen = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  console.log(inputs);
  function handleSubmit() {}
  function InputChangedHandlers(inputIdentifier, enteredValue) {
    setInputs((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  return (
    <div className="backgroundImage">
      <span className="Apptitle">Fortunus Vision</span>
      <div class="formRootContainer">
        <form onSubmit={handleSubmit} className="formContainer">
          <label className="label">Email </label>
          <input
            placeholder="admin@outlook.com"
            className="input"
            type="text"
            onChange={(e) =>
              InputChangedHandlers("email", e.currentTarget.value)
            }
          />
          <label className="label">Password </label>
          <input
            placeholder="Password must contain 6 characters and at least one upper case letter"
            className="input"
            type="password"
            onChange={(e) =>
              InputChangedHandlers("password", e.currentTarget.value)
            }
          />

          <div className="submitContainer">
            <input type="submit" value={`LOGIN NOW `} className="submit" />
            <AiOutlineArrowRight />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
