import React from "react";
import { Link } from "react-router-dom";

function LoggedOutLinks() {
  return (
    <div>
      <Link to="/">
        <button className="btn login">Login</button>
      </Link>
      <Link to="/">
        <button className="btn signup">SignUp</button>
      </Link>
    </div>
  );
}

export default LoggedOutLinks;
