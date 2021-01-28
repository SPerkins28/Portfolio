import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import family from "../assets/family-sm.png";
import Logo from "../assets/logoWhite.png";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import "./NavBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(6),
    },
  })
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="sideBar">
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        id="sideDrawer"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem button>
            <a href="#AboutMe" className="links">
              <img src={family} alt="family" id="family" />
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <a href="#AboutMe" className="links">
              <ListItemText primary="About" />
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <a href="#Education" className="links">
              <ListItemText primary="Education" />
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <a href="#skills" className="links">
              <ListItemText primary="Skills" />
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <a href="#projects" className="links">
              <ListItemText primary="Projects" />
            </a>
          </ListItem>
          <List>
            <ListItem button>
              <a href="#hobbies" className="links">
                <ListItemText primary="Hobbies" />
              </a>
            </ListItem>
          </List>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem></ListItem>
        </List>
        <List>
          <ListItem>
            <img src={Logo} alt="Logo" id="Logo" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hobbies />
      </main>
    </div>
  );
};

export default NavBar;
