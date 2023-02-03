import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["neutral-800"]};
  }

  *:focus {
  outline: none;
  /* outline: 4px dotted #e67e22; */
  /* outline-offset: 8px; */
  box-shadow: 0 0 0 .1rem ${(props) => props.theme["indigo-700"]};
}
`;
