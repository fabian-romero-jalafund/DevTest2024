import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#73BFB3",
    },
    background: {
      default: "#E7EBF4",
    },
  },
  components: {
    MuiContainer: {
        styleOverrides: {
            root: {
                marginTop: 24
            }
        }
    }
  }
});

export default theme;
