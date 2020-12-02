import React from "react";
import Gallery from "./Gallery";
import "../account.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  bgcolor: {
    backgroundColor: "#00e5ff",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

function Account({ user, loggedInUser }) {
  const classes = useStyles();

  return (
    <div className="account">
      <div className="account__info">
        <div className="account__display">
          <Avatar
            alt={`${user.username}` || ""}
            src="/s.jpg"
            className={`${classes.large} + ${classes.bgcolor}`}
          />
        </div>
        {/* Display */}

        <div className="account__stats">
          <div className="numbers">
            <span>{user.postCount || 0}</span>
            <span>POSTS</span>
          </div>
          <div className="numbers">
            <span>50</span>
            <span>FOLLOWERS</span>
          </div>
          <div className="numbers">
            <span>30</span>
            <span>FOLLOWING</span>
          </div>
        </div>
        {/* Account Details, followers-following-posts */}

        <h3>
          {user.name} / <span>{user.username}</span>
        </h3>

        {/* Name */}
        <p> {user.description} </p>
        {/* Description */}
      </div>
      <Gallery
        username={user.username}
        loggedInUser={loggedInUser}
        postslist={user.posts}
      />
      {/* posts gallery */}
    </div>
  );
}

export default Account;
