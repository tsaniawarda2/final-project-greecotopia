import React from "react";
import { Switch, Route, Redirect } from "react-router";

import {
  Welcome,
  Home,
  Login,
  Register,
  Account,
  EditProfile,
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
  FormReward,
  NotFound,
} from "./pages";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return <Redirect to="/home"/>;
            } else {
              return <Register {...props} />;
            }
          }}
        />
        <Route exact path="/login" 
          render={(props) => {
            if (localStorage.getItem("token")) {
              return <Redirect to="/home"/>;
            } else {
              return <Login {...props} />;
            }
          }}
        />
        <Route exact path="/password" component={Password} />
        <Route exact path="/home" component={Home} />

        {/* Account */}
        <Route exact path="/account"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login"/>;
            } else {
              return <Account {...props} />;
            }
          }}
        />
        <Route exact path="/editProfile"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login"/>;
            } else {
              return <EditProfile {...props} />;
            }
          }}
        />

        {/* Forum */}
        <Route exact path="/forums" component={Forum} />
        <Route exact path="/forums/:id" component={Issues} />
        <Route exact path="/issues/:id" component={Issue} />

        {/* Tanam Pohon */}
        <Route exact path="/tanamPohon" 
          render={(props) => <TanamPohon {...props}/>} 
        />
        <Route exact path="/allTanamPohon" 
          render={(props) => <AllTanamPohon {...props}/>} 
        />
        <Route exact path="/formTanamPohon/:id" 
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login"/>;
            } else {
              return <FormTanamPohon {...props} />;
            }
          }}
        />
        <Route exact path="/formDocumentation/:id" 
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login"/>;
            } else {
              return <FormDocumentation {...props} />;
            }
          }}
        />
        <Route exact path="/documentations" 
          render={(props) => <Documentations {...props}/>} 
        />
        <Route exact path="/documentations/:id"
          render={(props) => <Documentation {...props}/>} 
        />

        {/* Leaderboard */}
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/formReward" component={FormReward} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}
