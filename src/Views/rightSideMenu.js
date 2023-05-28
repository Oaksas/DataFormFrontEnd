import { Grid } from "@material-ui/core";
import React from "react";

function rightSideMenu() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </div>
  );
}

export default rightSideMenu;
