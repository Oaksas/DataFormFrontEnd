import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { PlayArrow, Pause, Stop } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "8px",
  },
  buttonGroup: {
    "& .MuiButton-root": {
      marginTop: theme.spacing(1), // Add margin-top of 30px

      borderRadius: "50%",
      backgroundColor: "green",
      border: "none",
      color: "#263238",
      "&:hover": {
        backgroundColor: "darkgreen",
      },
    },
    "& > *": {
      padding: theme.spacing(1, 1), // Add padding in the x-direction
    },
  },
}));

const RunButtons = () => {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonGroup}>
      <Button className={classes.button}>
        <PlayArrow />
      </Button>
      <Button className={classes.button}>
        <Pause />
      </Button>
      <Button className={classes.button}>
        <Stop />
      </Button>
    </ButtonGroup>
  );
};

export default RunButtons;
