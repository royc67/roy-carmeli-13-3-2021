import React from "react";
import PageNavbar from "../components/PageNavbar.jsx";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchiveItems from "../components/ArchiveItems.jsx";
import DeliveryItems from "../components/DeliveryItems.jsx";

export default function PurchaseByItem() {
  return (
    <Grid container>
      <Router>
        <PageNavbar />
        <Switch>
          <Route
            path="/roy-carmeli-13-3-2021/purchase/byItem/delivery"
            component={DeliveryItems}
          />
          <Route
            path="/roy-carmeli-13-3-2021/purchase/byItem/archive"
            component={ArchiveItems}
          />
        </Switch>
      </Router>
    </Grid>
  );
}
