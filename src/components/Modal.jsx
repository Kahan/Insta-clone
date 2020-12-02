import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import instagram from "../images/instagram.png";

function ModalLogin(props) {
  const [loginSelected, setLoginSelected] = useState(1); // LOGIN/SIGNUP SWITCH
  const handleChange = () => {
    setLoginSelected(!loginSelected);
  };

  return (
    <div>
      <div className="modal__image">
        <img src={instagram} alt="Instagram" />
      </div>
      {loginSelected ? (
        <Login handleChange={handleChange} history={props.history} />
      ) : (
        <SignUp handleChange={handleChange} history={props.history} />
      )}
    </div>
  );
}

export default ModalLogin;
