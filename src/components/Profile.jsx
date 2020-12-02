import React, { useEffect, useState } from "react";
import Account from "./Account";
import { connect } from "react-redux";
import { db } from "../fbConfig";

function Profile({ currentUser, match }) {
  const username = match.params.username;
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    if (`${currentUser.username}` === `${username}`) {
      setUser({ ...currentUser });
      setLoggedInUser(true);
    } else {
      db.collection("users")
        .doc(`${username}`)
        .get()
        .then((doc) => {
          setUser({ ...doc.data() });
          setLoggedInUser(false);
        });
    }
  }, [username, currentUser]);

  return <Account user={user} loggedInUser={loggedInUser} />;
}

const mapStateToProps = (state) => {
  return {
    currentUser: state,
  };
};

export default connect(mapStateToProps)(Profile);
