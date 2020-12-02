import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./Reducers/userReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { auth } from "./fbConfig";
import { startSetCurrentUser, clearCurrentUser } from "./Actions/userActions";
import AppRouter, { history } from "./Routers/Router";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);
/* eslint-enable */

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged in", user);
    // FETCH USER DETAILS FROM STORE
    store.dispatch(startSetCurrentUser(user.uid));
    if (history.location.pathname === "/") {
      history.push("/app");
    }
  } else {
    console.log("Logged Out");
    store.dispatch(clearCurrentUser());
    history.push("/");
  }
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
