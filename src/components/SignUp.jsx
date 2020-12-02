import React, { useState } from "react";
import { auth, db } from "../fbConfig";
import { toast } from "react-toastify";

function SignUp({ handleChange }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      postCount: 0,
      description: "Hello I'm using Instagram",
    };

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        toast("SignUp Successful 👏");
        const uid = ref.user.uid;
        db.collection("users")
          .doc(username)
          .set({ ...data, uid, username });
      })
      .catch((err) => toast.error(err.message + "😮"));
  };

  return (
    <div onSubmit={(e) => handleSubmit(e)} className="signup_form">
      <form autoComplete="off">
        <div className="form_group">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
        </div>
        <div className="form_group">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
        </div>
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
          <button className="login">Sign Up</button>
        </div>
      </form>

      <p>
        Already have an account?
        <span onClick={handleChange} className="signup">
          Log In
        </span>
      </p>
    </div>
  );
}

export default SignUp;
