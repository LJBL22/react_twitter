import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   /* chatGPT */
   src: url(//fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD-w.ttf) format('truetype');
   /* TA's */
   /* src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2) format('woff2'); */
   
   /* 只有數字 */
  /* unicode-range: U+30-39; */
  /* 數字跟符號 */
  unicode-range: U+20-29, U+2A-2F, U+30-39, U+3A-3F, U+40-47, U+48-5F, U+60-69, U+6A-6F, U+70-7F;
}
@font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   src: url(//fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD-w.ttf) format('truetype');
   
   /* 只有數字 */
  /* unicode-range: U+30-39; */
  /* 數字跟符號 */
  unicode-range: U+20-29, U+2A-2F, U+30-39, U+3A-3F, U+40-47, U+48-5F, U+60-69, U+6A-6F, U+70-7F;
}

@font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   /* chatGPT */
   src: url(//fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD-w.ttf) format('truetype');
   /* TA's */
   /* src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v10/IQHow_FEYlDC4Gzy_m8fcoWiMMZ7xLd792ULpGE4W_Y.woff2) format('woff2'); */
 
   /* 只有數字 */
  /* unicode-range: U+30-39; */
  /* 數字跟符號 */
  unicode-range: U+20-29, U+2A-2F, U+30-39, U+3A-3F, U+40-47, U+48-5F, U+60-69, U+6A-6F, U+70-7F;
}
  @font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 400;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format('opentype');
 }
@font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 500;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format('opentype');
 }
@font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 700;
   src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format('opentype');
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
