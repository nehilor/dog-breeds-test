import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AllBreeds from "./components/AllBreeds";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllBreeds />
    </ThemeProvider>
  );
}

export default App;
