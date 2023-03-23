import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
  /* 有時間再研究 font-face 的做法 */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap&text=0123456789%$');

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

body {
  font-family: 'Montserrat','Noto Sans TC', sans-serif;
  font-variant-numeric: tabular-nums;
  line-height: 1.625;
  -webkit-font-smoothing: antialiased;
}

/* Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Remove built-in form typography styles */
input,
button,
textarea,
select {
  font: inherit;
}

/* Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* Create a root stacking context */
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
  color: inherit;
}

/* * * * CSS common * * * */
:root {
    /* font-size */
    --fs-basic: 1rem; 
    --fs-secondary: 0.875rem;
    --fs-small: 0.75rem;
    --fs-h1: 4.25rem;
    --fs-h2: 2.625rem;
    --fs-h3: 1.75rem;
    --fs-h4: 1.5rem;
    --fs-h5: 1.125rem;

    /* colors */
    --color-theme: #FF6600;
    --color-primary: #0062FF;
    --color-secondary: #6C757D;
    --color-success: #3DD598;
    --color-warning: #FFC542;
    --color-error: #FC5A5A;

    --color-secondary-orange: #FF974A;
    --color-secondary-blue: #50B5FF;
    --color-secondary-green: #82C43C;
    --color-purple: #A461D8;
    --color-pink: #FF9AD5;

    --color-white: #FFFFFF;
    --color-gray-100: #FAFAFB;
    --color-gray-200: #F1F1F5;
    --color-gray-300: #E2E2EA;
    --color-gray-400: #D5D5DC;
    --color-gray-500: #B5B5BE;
    --color-gray-600: #92929D;
    --color-gray-700: #696974;
    --color-gray-800: #44444F;
    --color-gray-900: #171725;
  }

  body {
  font-size: var(--fs-basic);
  }
`;
