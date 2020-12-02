import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../fbConfig";
import { toast } from "react-toastify";

function Login({ handleChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => toast("SignUp Successful 👏"))
      .catch((err) => toast.error(err.message + "😮"));
  };

  return (
    <div className="login_form">
      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <div className="form_group">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </div>
        <div className="form_group">
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </div>
        <div className="form_group">
          <button className="login">Login</button>
        </div>
      </form>

      <p>
        Don't have an account?
        <span onClick={handleChange} className="signup">
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default connect()(Login);
