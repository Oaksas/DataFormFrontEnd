import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const TabMenu = ({ tabs, initialTab }) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(initialTab || 0);

  const handleTabChange = (event, value) => {
    setActiveTab(value);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs[activeTab].content}
    </div>
  );
};

TabMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  initialTab: PropTypes.number,
};

export default TabMenu;
