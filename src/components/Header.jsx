import React from "react";
import instagram from "../images/instagram.png";
import User from "./User";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ username }) {
  return (
    <div className="header">
      <Link to="/app" className="logo">
        <img src={instagram} alt="instagram" />
      </Link>

      <Link to={`/profile/${username}`}>
        <User username={username} />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Header);
