import React from "react";
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { LinkedIn, GitHub, MailOutline } from "@material-ui/icons";
import "./About.css";

const About = () => {
  return (
    <Grid container id="AboutMe">
      <Grid item xs={8} id="aboutMeContent">
        <Typography variant="h1">
          <strong>SEAN PERKINS</strong>
        </Typography>
        <Box id="contactLinks">
          <List>
            <ListItem button>
              <ListItemIcon>
                <a href="https://github.com/SPerkins28" target="blank">
                  <GitHub id="GitHubLink" />
                </a>
              </ListItemIcon>
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <a href="http://linkedin.com/in/sean-perkins28" target="blank">
                <LinkedIn id="LinkedInLink" />
                </a>
              </ListItemIcon>
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <a href="mailto:sgperkins28@gmail.com" target="blank">
                  <MailOutline id="EmailLink" />
                </a>
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
        
          <p className="aboutMeText">
            After close to 7 years in the construction estimation field, I
            decided it was time to do something I actually enjoy. I had already
            watched my wife graduate from Eleven Fifty at the end of 2018 and
            saw how much she enjoyed the experience and work afterwords. I
            started digging into coding and enrolled at Eleven Fifty quickly
            after.
          </p>
          <p className="aboutMeText">
            I truly feel I have made the right choice in choosing to enroll in
            the course. I am <strong>ADDICTED</strong> to coding! I love the
            fact that there is an infinite amount of knowledge for me to
            consume. I love that the only limits to knowledge are self imposed.
            I love creating something on my own then learning the most efficent
            way. I'm excited to continue to learn more every day!
          </p>
        </Grid>
    </Grid>
  );
};

export default About;
