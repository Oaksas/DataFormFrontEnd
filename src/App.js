import logo from "./logo.svg";
import "./App.css";
import LeftNavigation from "./Components/leftNavigation";
import Flow from "./Components/flow";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// Create a dark theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LeftNavigation />
      <Flow />
    </ThemeProvider>
  );
}

export default App;
