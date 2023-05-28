import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
  button: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 0,
    marginLeft: theme.spacing(3),
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
}));

export default function TextFieldWithButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        variant="standard"
        placeholder="Enter text"
        fullWidth
        InputProps={{
          endAdornment: (
            <Button variant="contained" className={classes.button}>
              Choose
            </Button>
          ),
        }}
      />
    </div>
  );
}
