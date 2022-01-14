import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { DataContext } from "./context/DataContext";

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
  Leaderboard,
  FormReward,
  NotFound,
} from "./pages";

export default function App() {
  const { topThree: claim } = useContext(DataContext);
  const { userLogin, rewards } = useContext(DataContext);

  const userID = userLogin?.user_id;
  const top3 = claim?.find((user) => user?.user_id === userID);
  const alreadyClaim = rewards?.find((rewards) => rewards?.user_id === userID);

  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} />} />
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return <Redirect to="/home" />;
            } else {
              return <Register {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/login"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return <Redirect to="/home" />;
            } else {
              return <Login {...props} />;
            }
          }}
        />

        {/* Account */}
        <Route
          exact
          path="/account"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login" />;
            } else {
              return <Account {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/editProfile"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login" />;
            } else {
              return <EditProfile {...props} />;
            }
          }}
        />

        {/* Forum */}
        <Route exact path="/forums" render={(props) => <Forum {...props} />} />
        <Route
          exact
          path="/forums/:id"
          render={(props) => <Issues {...props} />}
        />
        <Route
          exact
          path="/issues/:id"
          render={(props) => <Issue {...props} />}
        />

        {/* Tanam Pohon */}
        <Route
          exact
          path="/tanamPohon"
          render={(props) => <TanamPohon {...props} />}
        />
        <Route
          exact
          path="/allTanamPohon"
          render={(props) => <AllTanamPohon {...props} />}
        />
        <Route
          exact
          path="/formTanamPohon/:id"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login" />;
            } else {
              return <FormTanamPohon {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/formDocumentation/:id"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login" />;
            } else {
              return <FormDocumentation {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/documentations"
          render={(props) => <Documentations {...props} />}
        />
        <Route
          exact
          path="/documentations/:id"
          render={(props) => <Documentation {...props} />}
        />

        {/* Leaderboard */}
        <Route
          exact
          path="/leaderboard"
          render={(props) => <Leaderboard {...props} />}
        />
        <Route
          exact
          path="/formReward"
          render={(props) => {
            if (!localStorage.getItem("token")) {
              return <Redirect to="/login" />;
            } else {
              if (top3) {
                if (alreadyClaim) {
                  return <Redirect to="/leaderboard" />;
                } else {
                  return <FormReward {...props} />;
                }
              } else {
                return <NotFound />;
              }
            }
          }}
        />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}
