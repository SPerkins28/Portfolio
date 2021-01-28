import React from "react";
import { Box, Grid, Tooltip, Typography } from "@material-ui/core";
import BootStrap from "../assets/bootstrap-plain.svg";
import CSS from "../assets/css3-plain.svg";
import Express from "../assets/express-original.svg";
import HTML from "../assets/html5-plain.svg";
import GitHub from "../assets/github-original.svg";
import JS from "../assets/javascript-plain.svg";
import MUI from "../assets/material-ui-1.svg";
import NodeJs from "../assets/nodejs-plain.svg";
import Postgres from "../assets/postgresql-plain.svg";
import ReactSVG from "../assets/react-original.svg";
import Sequelize from "../assets/sequelize-plain.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <hr />
      <Grid container>
        <Grid item xs={8} id="skills">
          <Typography variant="h2" id="skillsHeading1">
            <strong>Skills</strong>
          </Typography>
            <br />
          <Typography variant="h4" id="skillsHeading2">
            Programming Languages and Tools
          </Typography>
          <br />
          <br />
          <Box id="skillsIcons">
            <Tooltip title="BootStrap">
              <img src={BootStrap} alt="BootStrap" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="CSS3">
              <img src={CSS} alt="CSS" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="Express">
              <img src={Express} alt="Express" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="HTML 5">
              <img src={HTML} alt="HTML" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="GitHub">
              <img src={GitHub} alt="GitHub" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="JavaScript">
              <img src={JS} alt="JavaScript" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="Material-UI">
              <img src={MUI} alt="MUI" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="Node.JS">
              <img src={NodeJs} alt="NodeJs" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="PostgreSQL">
              <img src={Postgres} alt="Postgres" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="React">
              <img src={ReactSVG} alt="ReactSVG" className="skillsSVG" />
            </Tooltip>
            <Tooltip title="Sequelize">
              <img src={Sequelize} alt="Sequelize" className="skillsSVG" />
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
