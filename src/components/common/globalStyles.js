import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXx-p7K4KLg.woff) format('woff');
  /* 數字跟符號 */
  unicode-range: U+30-39, U+0021-002F, U+003A, U+003F;
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aXx-p7K4KLg.woff) format('woff');
   unicode-range: U+30-39, U+0021-002F, U+003A, U+003F;
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXx-p7K4KLg.woff) format('woff');
   /* 中文跟英文 */
   unicode-range: U+30-39, U+0021-002F, U+003A, U+003F;
}
  @font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 400;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format('opentype');
   unicode-range: U+4E00-9FFF, U+00-024F;
 }
@font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 500;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format('opentype');
   unicode-range: U+4E00-9FFF, U+00-024F;
 }
@font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 700;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format('opentype');
   unicode-range: U+4E00-9FFF, U+00-024F;
 }

/* * * * CSS reset * * * */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  padding: 0;
  min-height: 100%;
  scroll-behavior: smooth;
  font-weight: 400;
  font-style: normal;
}
body {
  /* 以 Montserrat 優先 */
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
