import { signUserIn } from "./http";

export default async function handleSubmit(inputs, setMessage, navigate) {
  const res = await signUserIn(inputs.email, inputs.password);
  console.log(inputs);
  if (res.user_type === 0) {
    setMessage("Dear user please log in from the mobile application");
  } else if (res.user_type === 1)
    setMessage("Dear expert please log in from the mobile application");
  else if (res.user_type === undefined) {
    setMessage("Wrong Credentials");
  } else {
    navigate("/LandingScreen");
  }
}

export function InputChangedHandlers(setInputs, inputIdentifier, enteredValue) {
  setInputs((currInput) => {
    return {
      ...currInput,
      [inputIdentifier]: enteredValue,
    };
  });
}
