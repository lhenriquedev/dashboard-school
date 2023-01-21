import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
}
