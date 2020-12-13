import "./App.css";
import React from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";

import Home from "./Home";
import { red } from "@material-ui/core/colors";
import { useState } from "react";

const useStyles = makeStyles({
  root: {}
});
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336"
      },
      secondary: {
        main: "#3EA6FF"
      },
      background: {
        default: darkMode ? "#232323" : "#FFFF",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#FFFF"
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}></Home>
    </ThemeProvider>
  );
}

export default App;
