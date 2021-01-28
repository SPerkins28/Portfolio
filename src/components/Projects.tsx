import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import Creature from "../assets/cssCreature.png";
import PokeAPI from "../assets/poke-api.gif";
import Static from "../assets/staticLayout.png";
import LevelUp from "../assets/levelUp.gif";
import "./Projects.css";

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 375,
    margin: 10,
  },
  media: {
    height: 200,
    objectFit: "cover",
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <hr />
      <Grid container>
        <Grid item xs={12} md={8} id="projects">
          <Typography variant="h2" id="projectsHeading">
            <strong>Projects</strong>
          </Typography>
          <br />
          <br />
          <Box id="projectCards">
            <Card className={classes.root} id="levelUp">
              <CardActionArea>
                <a
                  href="https://sgp-level-up-client.herokuapp.com/"
                  target="blank"
                >
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={LevelUp}
                    title="Level Up"
                  />
                </a>
              </CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textDecoration: "underline" }}
                >
                  <strong>Level Up</strong>
                </Typography>
                <Typography variant="body2" component="p" id="levelUpDescription">
                  Solo Full Stack application utilizing Node.js, Express, and
                  Sequelize along with PostgreSQL to build the server. Client
                  side utilizes React with Typescript and is styled using
                  Material UI.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.root} id="pokemon">
              <CardActionArea>
                <a href="https://sperkins28.github.io/API_1/" target="blank">
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={PokeAPI}
                    title="Pokémon API"
                  />
                </a>
              </CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textDecoration: "underline" }}
                >
                  <strong>Pokémon API</strong>
                </Typography>
                <Typography variant="body2" component="p" id="pokéDescription">
                  Utilized the Pokémon API, JavaScript, and DOM Manipulation to
                  pull and display Pokémon information in a fun way.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.root} id="static">
              <CardActionArea>
                <a
                  href="https://sperkins28.github.io/staticLayout/"
                  target="blank"
                >
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={Static}
                    title="Static Layout"
                  />
                </a>
              </CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textDecoration: "underline" }}
                >
                  <strong>Static Layout</strong>
                </Typography>
                <Typography variant="body2" component="p" id="staticDescription">
                  Refined CSS 3 an HTML 5 skills by replicating the Hulu
                  homepage.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.root} id="creature">
              <CardActionArea>
                <a
                  href="https://codepen.io/sperkins28/pen/YzWzLjm"
                  target="blank"
                >
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={Creature}
                    title="CSS Creature"
                  />
                </a>
              </CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textDecoration: "underline" }}
                >
                  <strong>CSS Creature</strong>
                </Typography>
                <Typography variant="body2" component="p" id="creatureDescription">
                  Utilized only CSS 3 and HTML 5 to create a Captain America Pop
                  figure.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
