import React, { useState } from "react";
import "../styling/SignIn.css";
import { useNavigate } from "react-router-dom";
import handleSubmit from "../helper/SignIn.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import { signUserIn } from "../helper/http";
const SignInScreen = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

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
      <span className="description">Welcome to the admin panel ! </span>
      <div className="formRootContainer">
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
            <input
              type="submit"
              value={`LOGIN NOW `}
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(inputs, setMessage, navigate);
              }}
            />
            <AiOutlineArrowRight />
          </div>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default SignInScreen;
