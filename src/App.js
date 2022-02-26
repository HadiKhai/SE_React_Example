import React from "react";
import { Switch, Route} from "react-router-dom";
import {NAVBAR_ROUTE} from "./routes/constants";
import Main from "./layout/Main";

export default function App() {

  return (
      <Switch>
          <Main>
              {
                  NAVBAR_ROUTE.map(({path,component}) => (
                      <Route exact path={path} component={component} />
                  ))
              }
          </Main>
      </Switch>
  )
};