import React from "react";
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
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

function User({ username }) {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt={`${username}`}
        src="unknown.jpg"
        className={`${classes.large} + ${classes.bgcolor}`}
      />
    </div>
  );
}

export default User;
