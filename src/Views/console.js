import React, { useState } from "react";
import {
  makeStyles,
  Fab,
  Paper,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import Console from "../Components/buttomConsole";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999,
  },
  paper: {
    padding: theme.spacing(2),
    minWidth: 300,
  },
}));

export default function ConsoleMenu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Console />
      </div>
    </ClickAwayListener>
  );
}
