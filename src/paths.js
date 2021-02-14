import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Componentes/Login";
import Dash from "./Dashboard";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Dash />
      </Route>
      {/* The default route */}
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
