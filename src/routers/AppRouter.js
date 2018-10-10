import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DetailedInfoDashboardPage from "../components/DetailedInfoDashboardPage";
import AddDetailedInfoPage from "../components/AddDetailedInfoPage";
import EditDetailedInfo from "../components/EditDetailedInfo";
import NotFoundPage from "../components/NotFoundPage";
import SigninPage from "../components/SigninPage";
import SignupPage from "../components/SignupPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={SigninPage} exact={true} />
        <PublicRoute path="/signup" component={SignupPage} />
        <PrivateRoute path="/dashboard" component={DetailedInfoDashboardPage} />
        <PrivateRoute path="/create" component={AddDetailedInfoPage} />
        <PrivateRoute path="/edit/:id" component={EditDetailedInfo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
