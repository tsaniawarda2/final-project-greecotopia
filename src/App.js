import React from "react";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Home,
  Login,
  SignUp,
  Account,
  Forum,
  Issues,
  Issue,
  TanamPohon,
  Leaderboard,
} from "./pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forums" component={Forum} />
        <Route exact path="/issues" component={Issues} />
        <Route exact path="/issues/:id" component={Issue} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
      <Footer />
    </>
  );
}
