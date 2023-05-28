import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
  Typography,
  ListItemIcon,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { rightMenuListItems } from "../Utils";
import RightMenuRadioButtonsGroup from "./rightMenuRadioGroup";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItemIcon: {
    minWidth: "unset",
    marginRight: theme.spacing(2),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = useState(
    Array(rightMenuListItems.length).fill(false)
  );

  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <List component="nav">
      {rightMenuListItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(index)}>
            <ListItemIcon className={classes.listItemIcon}>
              {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[0, 1].map((subIndex) => (
                <ListItem button key={subIndex} className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Typography variant="caption">-</Typography>
                  </ListItemIcon>
                  <ListItemText primary={`Menu ${subIndex + 1}`} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
      <TextField
        className={classes.nested}
        id="filled-basic"
        placeholder="URL"
        variant="filled"
        size="small"
      />

      <RightMenuRadioButtonsGroup />
    </List>
  );
}
