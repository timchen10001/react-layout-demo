import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
