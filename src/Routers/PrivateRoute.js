import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
          <LogoutButton />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (store) => {
  return {
    isAuthenticated: !!store,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
