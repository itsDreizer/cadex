"use client";
import { store } from "@/redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

const myTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "__Montserrat_914be4",
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
