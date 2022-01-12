import React from "react";
import { Switch, Route } from "react-router";

import {
  Welcome,
  Home,
  Login,
  Register,
  Account,
  EditProfile,
  // ContactUs,
  Forum,
  Issues,
  Issue,
  TanamPohon,
  AllTanamPohon,
  FormTanamPohon,
  FormDocumentation,
  Documentations,
  Documentation,
  Password,
  Leaderboard,
  NotFound,
} from "./pages";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forums" component={Forum} />
        <Route exact path="/forums/:id" component={Issues} />
        <Route exact path="/issues/:id" component={Issue} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/allTanamPohon" component={AllTanamPohon} />
        <Route exact path="/formTanamPohon" component={FormTanamPohon} />
        <Route exact path="/formTanamPohon/:id" component={FormTanamPohon} />
        <Route exact path="/formDocumentation" component={FormDocumentation} />
        <Route
          exact
          path="/formDocumentation/:id"
          component={FormDocumentation}
        />
        <Route exact path="/documentations" component={Documentations} />
        <Route exact path="/documentations/:id" component={Documentation} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}
