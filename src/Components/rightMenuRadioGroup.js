import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));
export default function RightMenuRadioButtonsGroup() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">Send File</FormLabel>
      <RadioGroup
        aria-label="sendFile"
        name="sendFile"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="setvalue"
          control={<Radio />}
          label="Set a value"
        />
        <FormControlLabel
          value="previous"
          control={<Radio />}
          label="Save the previous step result"
        />
        <FormControlLabel
          value="calculte"
          control={<Radio />}
          label="Calculate a value"
        />
      </RadioGroup>
    </FormControl>
  );
}
