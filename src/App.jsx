import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollIntoView from "./Components/ScrollIntoView";
import Layout from "./layout/Layout";
import "./App.scss";
import "bootstrap/scss/bootstrap.scss";

export default function App() {
  return (
    <BrowserRouter>
     <ScrollIntoView>
      <Switch>
        <Route path="/" component={Layout} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      </ScrollIntoView>
    </BrowserRouter>
  );
}

function NotFound() {
  return <div>Not found</div>;
}
