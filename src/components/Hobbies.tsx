import React from "react";
import { Typography, Grid } from "@material-ui/core";
import "./Hobbies.css";

const Hobbies = () => {
  return (
    <>
      <hr />
      <Grid container>
        <Grid item xs={8} id="hobbies">
          <Typography variant="h2" id="hobbiesHeading">
            <strong>Hobbies</strong>
          </Typography>
          <br />
          <Typography variant="body2">
            When I am not coding, I enjoy watching movies with my family (with a
            3 year old in the house, it is all animated all the time) or
            watching Colts games during football season. During the warmer
            months, I enjoy hanging out with friends and family for cookouts and
            bonfires. I also enjoy building computers and playing video games in
            the additional spare time that I may have.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Hobbies;
