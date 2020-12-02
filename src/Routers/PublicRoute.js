import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to="/app" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (store) => {
  return {
    isAuthenticated: !!store,
  };
};

export default connect(mapStateToProps)(PublicRoute);
