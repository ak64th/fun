/*
* Put global styles into a side-effect only module to ensure `injectGlobal`
* called once per app most
*/
import {injectGlobal} from "styled-components";
import {normalize} from "styled-normalize";

injectGlobal`
  ${normalize}

  body {
    padding: 0;
    font-family: sans-serif;
  }
`;
