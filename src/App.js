import React from "react";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Home,
  Account,
  Forum,
  TanamPohon,
  FormTanamPohon,
  FormDocumentation,
  Login,
  SignUp,
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
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/formTanamPohon" component={FormTanamPohon} />
        <Route exact path="/formTanamPohon/:id" component={FormTanamPohon} />
        <Route exact path="/formDocumentation" component={FormDocumentation} />
        <Route exact path="/formDocumentation/:id" component={FormDocumentation} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
      <Footer />
    </>
  );
}
