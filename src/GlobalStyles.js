import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button{
  border: none;
}

a{
  text-decoration: none;
  color: inherit;
}

li{
  list-style: none;
}
`;
