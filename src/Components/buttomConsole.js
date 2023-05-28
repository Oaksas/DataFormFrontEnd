import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import { Fab } from "@material-ui/core";
import { Update } from "@material-ui/icons";
import { consolLogsSummary, consoleLogs } from "../Utils";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Console() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {consoleLogs.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Update color="secondary" />
              ) : (
                <Update style={{ color: "#FF9800" }} />
              )}
            </ListItemIcon>
            {index % 2 === 0 ? (
              <ListItemText primary={text} style={{ color: "#e91e63" }} />
            ) : (
              <ListItemText primary={text} style={{ color: "#FF9800" }} />
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {consolLogsSummary.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Update style={{ color: "#FF9800" }} />
              ) : (
                <Update />
              )}
            </ListItemIcon>
            {index % 2 === 0 ? (
              <ListItemText primary={text} style={{ color: "#009688" }} />
            ) : (
              <ListItemText primary={text} />
            )}{" "}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <>
        <Fab color="primary" onClick={toggleDrawer("bottom", true)}>
          <CodeIcon />
        </Fab>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </>
    </div>
  );
}
