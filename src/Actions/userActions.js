import { db } from "../fbConfig";

// FETCH AND SET CURRENT USER
export const startSetCurrentUser = (uid) => {
  return (dispatch) => {
    db.collection("users")
      .where("uid", "==", `${uid}`)
      .onSnapshot((snapshot) => {
        dispatch(setCurrentUser(snapshot.docs[0].data()));
      });
  };
};

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

// CLEAR CURRENT USER AFTER
export const clearCurrentUser = (params) => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};
