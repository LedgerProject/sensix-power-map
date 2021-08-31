import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Map } from "../Map/Map";
import { Navbar } from "../Navbar/Navbar";

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}
