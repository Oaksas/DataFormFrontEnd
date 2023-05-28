import React from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import LightningIcon from "@material-ui/icons/FlashOn";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(10),
    "& .MuiButton-root": {
      border: "none",
    },
  },
  iconButton: {
    backgroundColor: "transparent",
    padding: theme.spacing(1, 1),
  },
}));

export default function ConfigUser() {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonGroup}>
      <Button className={classes.iconButton}>
        <LanguageIcon />
      </Button>
      <Button className={classes.iconButton}>
        <PersonIcon alt="User Avatar" />
      </Button>
      <Button className={classes.iconButton}>
        <LightningIcon style={{ color: "green" }} />
      </Button>
    </ButtonGroup>
  );
}
