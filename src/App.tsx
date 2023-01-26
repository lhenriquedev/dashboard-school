import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
