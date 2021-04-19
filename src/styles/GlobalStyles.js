import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #2E2E2E;
        /* --yellow: #ffdd1a; */
         --yellow: #ffdd1a;
        --white: #fff;
        --grey: #efefef;
        --dark: #202030;
        --blue: #0E0F19;
    }

    html {
        font-size: 10px;
        background-color: var(--blue);
    }

    body {
        font-family: 'Roboto Mono', 'Courier New', Courier, monospace;
        font-size: 2rem;
        color: var(--white);
        line-height: 1.5;
        padding-right: 20px;
        padding-left: 20px;
    }

    a {
        color: var(--yellow);
        text-decoration: none;
    }

    a:hover {
        border-bottom: 3px solid var(--yellow);
        border-color: var(--yellow);
        border-bottom-color: var(--yellow);
    }

    /* Scrollbar Style */

    body::-webkit-scrollbar {
        width: 16px;
    }

    html {
        scrollbar-width: thin;
        scrollbar-color: var(--yellow) var(--dark);
    }

    body::-webkit-scrollbar-track {
        background: var(--dark);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--yellow) ;
        border-radius: 6px;
        border: 3px solid var(--dark);
    }
`;

export default GlobalStyles;