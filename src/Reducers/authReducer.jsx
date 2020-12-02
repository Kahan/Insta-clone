// import { auth } from "../fbConfig";

const initState = {
  isLoggedIn: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return { isLoggedIn: true };

    case "USER_LOGGED_OUT":
      return {};

    default:
      return state;
  }
};
