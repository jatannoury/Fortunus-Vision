import React from "react";
import "../styling/SignIn.css";
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

          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
