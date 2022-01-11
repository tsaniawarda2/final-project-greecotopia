import React from "react";
import { Switch, Route } from "react-router";

import {
  Welcome,
  Home,
  Account,
  Forum,
  TanamPohon,
  Login,
  SignUp,
  Leaderboard,
} from "./pages";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
    </>
  );
}
