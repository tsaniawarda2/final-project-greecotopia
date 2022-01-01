import React from "react";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Home,
  Account,
  Forum,
  TanamPohon,
  Login,
  SignUp,
  Password,
  Leaderboard,
} from "./pages";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}
