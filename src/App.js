import React from "react";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Home,
  Login,
  Register,
  Account,
  Forum,
  Issues,
  Issue,
  TanamPohon,
  Leaderboard,
} from "./pages";
import NotFound from "./pages/errors/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forums" component={Forum} />
        <Route exact path="/forums/:id" component={Issues} />
        <Route exact path="/issues/:id" component={Issue} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
