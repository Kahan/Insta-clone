import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import PrivateRoute from "../Routers/PrivateRoute";
import PublicRoute from "../Routers/PublicRoute";
import { createBrowserHistory } from "history";
import Feed from "../components/Feed";
import ModalLogin from "../components/Modal";
import Profile from "../components/Profile";
import Page404 from "../components/Page404";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/app" component={Feed} />
          {/* Home */}

          <PrivateRoute path="/profile/:username" component={Profile} />
          {/* Profile */}

          <PublicRoute path="/" component={ModalLogin} />
          {/* Login SignUp */}

          <Route path="/404" component={Page404} />
          {/* 404 Page */}
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
