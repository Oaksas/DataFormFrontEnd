import LeftNavigation from "./Components/leftNavigation";
import Flow from "./Components/flow";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, createTheme, makeStyles } from "@material-ui/core";
import "./App.css";
import RightSideMenu from "./Views/rightSideMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import ConsoleMenu from "./Views/console";

// Create a dark theme
const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LeftNavigation />

      <Grid container className={classes.root}>
        <Grid item xs={9}>
          <Flow />
        </Grid>
        <Grid item xs={3}>
          <RightSideMenu />
        </Grid>
      </Grid>
      <ConsoleMenu />
    </ThemeProvider>
  );
}

export default App;
