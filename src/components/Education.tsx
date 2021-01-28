import React from "react";
import { Typography, Grid } from "@material-ui/core";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";
import "./Education.css";

const Education = () => {
  return (
    <>
      <hr />
      <Grid container id="Education">
        <Grid item xs={8}>
          <Typography variant="h2">
            <strong>Education</strong>
          </Typography>
          <br />
          <br />
          <Typography variant="h4">
            <strong>Eleven Fifty Academy</strong>
          </Typography>
          <Typography variant="h5">12 Week Web Development BootCamp</Typography>
          <p>
            Participated in an intensive 12 week bootcamp developing skills in
            Bootstrap, CSS 3, Express, HTML 5, JavaScript, Material UI, Node.Js,
            PostgreSQL, React, and Sequelize.
          </p>
          <p>
            Utilized 3rd party APIs to pull information and display it through
            DOM Manipulation. Completed projects including two Full-Stack
            applications, one group project and one solo project.
          </p>
          <p>
              <VerifiedUserOutlined />
              {""} Learning Core Value Award: To acquire and refine knowledge
              and skills that lead to continuous self-improvement.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;
