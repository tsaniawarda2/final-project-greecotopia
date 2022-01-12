import React from "react";
import { Switch, Route } from "react-router";

import {
  Welcome,
  Home,
  Account,
  Forum,
  TanamPohon,
  Login,
  Register,
  Password,
  Leaderboard,
} from "./pages";
import NotFound from "./pages/errors/NotFound";

export default function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
=======
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
>>>>>>> 0c94c6fdd95197ef3f8a33449a9e6224d0fccb77
        <Route exact path="/login" component={Login} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forums" component={Forum} />
        <Route exact path="/tanamPohon" component={TanamPohon} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
<<<<<<< HEAD
      {/* <Footer /> */}
=======
>>>>>>> 0c94c6fdd95197ef3f8a33449a9e6224d0fccb77
    </>
  );
}
