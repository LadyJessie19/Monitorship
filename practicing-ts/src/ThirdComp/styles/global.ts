import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    /* display: flex; */
    min-width: 320px;
    min-height: 100vh;
  }

  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(46, 46, 46, 0.87);
  background-color: #e9e6e6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: inherit;
  text-decoration: inherit;
}
a:hover {
  text-decoration: underline;
}

a::selection {
    text-decoration: underline;
  }

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;
