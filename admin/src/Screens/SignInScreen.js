import React from "react";
import "../styling/SignIn.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const SignInScreen = () => {
  function handleSubmit() {}
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
            // value={this.state.value}
            // onChange={this.handleChange}
          />
          <label className="label">Password </label>
          <input
            placeholder="Password must contain 6 characters and at least one upper case letter"
            className="input"
            type="password"
            // value={this.state.value}
            // onChange={this.handleChange}
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
