import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Post from "../Component/Post";

const Route = () => {
    return (
      <Switch>
        <Route path="/Post" component={Route} />

      </Switch>
    );
  };

  export default Route;