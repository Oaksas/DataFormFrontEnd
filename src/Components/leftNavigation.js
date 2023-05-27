import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Collapse,
} from "@material-ui/core";
import { ExpandMore, ExpandLess, ChevronRight } from "@material-ui/icons";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import SearchIcon from "@material-ui/icons/Search";
import ReplayIcon from "@material-ui/icons/Replay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import StorageIcon from "@material-ui/icons/Storage";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerCollapsed: {
    width: theme.spacing(7),
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaperCollapsed: {
    width: theme.spacing(7),
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  expandButton: {
    justifyContent: "flex-end",
  },
}));

const LeftNavigation = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Drawer
      className={`${classes.drawer} ${
        !expanded ? classes.drawerCollapsed : ""
      }`}
      variant="permanent"
      classes={{
        paper: `${classes.drawerPaper} ${
          !expanded ? classes.drawerPaperCollapsed : ""
        }`,
      }}
    >
      <List>
        {/* Default sections with icons */}
        <ListItem button>
          <ListItemIcon>
            <PanoramaFishEyeIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PlayCircleFilledIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>{" "}
        <ListItem button>
          <ListItemIcon>
            <ChangeHistoryIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>{" "}
        <ListItem button>
          <ListItemIcon>
            <ReplayIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>{" "}
        <ListItem button>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>{" "}
        <ListItem button>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemIcon>{/* Add your desired icon component */}</ListItemIcon>
          </Collapse>
        </ListItem>
        {/* Sections with icons and text */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                {/* Add your desired icon component */}
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                {/* Add your desired icon component */}
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>
        {/* Expand button */}
        <ListItem onClick={handleExpand}>
          <ListItemIcon>
            {expanded ? <ChevronRight /> : <ExpandMore />}
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNavigation;
