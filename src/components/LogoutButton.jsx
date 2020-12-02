import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { auth } from "../fbConfig";

function LogoutButton() {
  return (
    <div
      className="logout_button"
      onClick={() => {
        auth.signOut();
      }}
    >
      <IconContext.Provider
        value={{ className: "react__icons", size: "1.2em", color: "white" }}
      >
        <FaSignOutAlt />
      </IconContext.Provider>
    </div>
  );
}

export default LogoutButton;
