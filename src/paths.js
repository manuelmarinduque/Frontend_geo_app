import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Componentes/Login";
import Registro from "./Componentes/registroUsuarios";
import Dash from "./Dashboard";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Dash />
      </Route>
      <Route path ="/registro">
        <Registro />
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
