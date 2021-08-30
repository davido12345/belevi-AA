import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import whatsappIcon from '../assets/images/others/whatsapp-icon.png'
import routes from "../routes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);

export default function Layout() {
  return (
    <>
      <Header/>
        <div className="layout-padding" >{switchRoutes}</div>
      <Footer />
      <div className="whatsapp-widget-container">
        <div className="whatsapp-widget-main">
          <h4>We are here to help!</h4>
          <p>Give us a ring</p>
          <img src={whatsappIcon} alt="whatsapp-contact" />
        </div>
      </div>
    </>
  );
}
