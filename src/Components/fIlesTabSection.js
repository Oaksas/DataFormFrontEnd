import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabIcon: {
    display: "flex",
    alignItems: "center",
    fontSize: "10px",
  },
  closeIcon: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
    fontSize: "15px",
  },
  selectedTab: {
    backgroundColor: "#455a64",
    color: "white",
  },
}));

export default function FilesTabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState([
    { label: "New File" },
    { label: "File 2" },
    { label: "File 3" },
    { label: "File 4" },
    { label: "File 5" },
    { label: "File 6" },
    { label: "File 7" },
    { label: "File 8" },
    { label: "File 9" },
    { label: "File 10" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClose = (index) => {
    const updatedTabs = [...tabs];
    updatedTabs.splice(index, 1);
    setTabs(updatedTabs);
    if (value >= index && value !== 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        textColor="white"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Files Tabs"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <div className={classes.tabIcon}>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={() => handleTabClose(index)}
                />
                {tab.label}
              </div>
            }
            className={value === index ? classes.selectedTab : null}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <Typography
          key={index}
          component="div"
          role="tabpanel"
          hidden={value !== index}
        >
          {tab.content}
        </Typography>
      ))}
    </div>
  );
}
