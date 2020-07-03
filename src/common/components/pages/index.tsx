import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NewsPage from "./newsPage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Redirect to={"/news"} />
      </Route>
      <Route exact path={"/news"} component={NewsPage} />
    </Switch>
  );
};

export default Routers;
