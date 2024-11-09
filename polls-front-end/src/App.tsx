import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home/>
    </ThemeProvider>
  );
};

export default App;
