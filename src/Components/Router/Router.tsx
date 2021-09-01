import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "src/Pages/Home/Home";
import { Navbar } from "../Navbar/Navbar";

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
