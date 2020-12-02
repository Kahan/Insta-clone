import { auth, db } from "../fbConfig";
// LOGIN
export const startLogin = (email, password) => {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(login());
      })
      .catch((err) => alert(err.message));
  };
};

export const login = () => {
  return {
    type: "USER_LOGGED_IN",
  };
};

// SIGNUP
export const startSignUp = (name, username, email, password) => {
  const data = {
    name,
    username,
    postCount: 0,
    description: "description",
    posts: [],
  };
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        const uid = ref.user.uid;
        db.collection("users")
          .doc(username)
          .set({ ...data, uid })
          .then(() => {
            dispatch(login());
          });
      })
      .catch((err) => alert(err.message));
  };
};
// LOGOUT
export const startLogOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(logOut());
      })
      .catch((err) => alert(err.message));
  };
};

export const logOut = () => {
  return {
    type: "USER_LOGGED_OUT",
  };
};
