import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
/* 試了幾個方法，暫時卡關數字更換字型的方法 &text=0123456789 */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap&text=0123456789');

/* * * * CSS reset * * * */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
  scroll-behavior: smooth;
  font-weight: 400;
  font-style: normal;
}

/* 試了幾個方法，暫時卡關數字更換字型的方法 */
body {
  font-family: 'Noto Sans TC','Montserrat', sans-serif;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

/*
  - Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/*
  - Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}

/*
  - Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/*
  - Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

`;
