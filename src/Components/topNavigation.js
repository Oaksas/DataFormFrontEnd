import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Badge,
  Button,
} from "@material-ui/core";
import {
  MoreVert,
  ArrowDropDown,
  ArrowDropDownCircle,
  Minimize,
  Maximize,
  Close,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#212121   ", // Blue-black background color
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: "#FFFFFF", // White color for icons
    marginRight: theme.spacing(1),
  },
  verticalLine: {
    height: 24,
    borderRight: "1px solid white",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const TopNavigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
      <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar mx>
        {/* First Element: Normal Dropdown */}
        <IconButton
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          className={classes.icon}
        >
          <ArrowDropDown />
        </IconButton>

        {/* Second Element: Dropdown with Trailing Icon */}
        <div className={classes.verticalLine} />
        <IconButton
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          className={classes.icon}
        >
          <ArrowDropDownCircle fontSize="small" />
        </IconButton>

        {/* Third Element: Icon with Light Blue Background */}
        <div className={classes.verticalLine} />
        <Button
          fontSize="small"
          className={classes.icon}
          style={{ backgroundColor: "#0d47a1" }}
        >
          Commit 2 files{" "}
        </Button>

        <Typography variant="h6" className={classes.title}></Typography>

        {/* Fourth Element: Icon Group */}
        <IconButton className={classes.icon}>
          <Minimize fontSize="small" />
        </IconButton>
        <IconButton className={classes.icon}>
          <Maximize fontSize="small" />
        </IconButton>
        <IconButton className={classes.icon}>
          <Close fontSize="small" />
        </IconButton>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default TopNavigation;
