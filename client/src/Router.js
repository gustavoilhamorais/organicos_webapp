import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CreateAccount from "./views/CreateAccount";
import Login from "./views/Login";
import ErrorView from "./views/Error";
import Home from "./views/Home";

const DefaultRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/novo-usuario" component={CreateAccount} />
        <Route exact path="/entrar" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={ErrorView} />
      </Switch>
    </Router>
  );
}

export default DefaultRouter;