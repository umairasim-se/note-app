import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import NotesContextProvider from "./context/NotesContextProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Inconsolata", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <NotesContextProvider>
      <Header />
      <Cards />
    </NotesContextProvider>
    /* </ThemeProvider> */
  );
}

export default App;
